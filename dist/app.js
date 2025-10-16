"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
exports.app = app;
app.use(body_parser_1.default.json());

let items = [];
let nextId = 1;

app.post('/items', (req, res) => {
    const { name, quantity } = req.body;
    if (!name || !quantity) {
        return res.status(400).json({ error: 'Name and quantity are required' });
    }
    const newItem = { id: nextId++, name, quantity, purchased: false };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item)
        return res.status(404).json({ error: 'Item not found' });
    res.json(item);
});

app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item)
        return res.status(404).json({ error: 'Item not found' });
    const { name, quantity, purchased } = req.body;
    if (name !== undefined)
        item.name = name;
    if (quantity !== undefined)
        item.quantity = quantity;
    if (purchased !== undefined)
        item.purchased = purchased;
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === id);
    if (index === -1)
        return res.status(404).json({ error: 'Item not found' });
    items.splice(index, 1);
    res.status(204).send();
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
});
