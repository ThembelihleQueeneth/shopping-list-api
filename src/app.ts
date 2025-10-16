import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Item } from './models/item';

const app = express();
app.use(bodyParser.json());

let items: Item[] = [];
let nextId = 1;


app.post('/items', (req: Request, res: Response) => {
  const { name, quantity } = req.body;
  if (!name || !quantity) {
    return res.status(400).json({ error: 'Name and quantity are required' });
  }

  const newItem: Item = { id: nextId++, name, quantity, purchased: false };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.get('/items', (req: Request, res: Response) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });

  const { name, quantity, purchased } = req.body;

  if (name !== undefined) item.name = name;
  if (quantity !== undefined) item.quantity = quantity;
  if (purchased !== undefined) item.purchased = purchased;

  res.json(item);
});


app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);

  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  items.splice(index, 1);
  res.status(204).send();
});

app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

export { app };




