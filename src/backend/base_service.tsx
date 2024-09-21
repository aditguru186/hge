
// const express = require('express');
import express from 'express'
import type{ Request, Response } from 'express';
class BaseService {
    async init() {
        try{
            console.log('BaseService initialized');

            const app = express();

            // Import your seed data
            const seedData = require('./seedData');

            // Create a route for listing all rooms
            app.get('/api/rooms', (req: Request, res: Response) => {
                // Retrieve the room data from your database or seed data
                const rooms = seedData.seedData_rooms; // or retrieve from database
                let resp = { ...res, rooms };
                return resp;

            });
            app.listen(3000, () => {
                console.log('Server listening on port 3000');
            });
        }
        catch (err) {
            console.log(err);
        }
        
    }
}

export default {
    BaseService
}