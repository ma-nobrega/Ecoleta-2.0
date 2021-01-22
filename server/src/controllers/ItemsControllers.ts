import { Request, Response } from 'express';
import knex from '../database/connection'
class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
    const serializedItems = items.map(items => {
      return {
        id: items.id,
        title: items.title,
        // image_url: `http://192.168.0.103:3333/uploads/${items.image}`,
         image_url: `http://localhost:3333/uploads/${items.image}`,
      };
    });
    return response.json(serializedItems);
  }
}

export default ItemsController