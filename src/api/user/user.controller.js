'use strict';

// SERVICES
import UserService from './user.service';

class UserController {

    findAll(req, res, next) {

        UserService.findAll((err, response) => {
            if (err) return next(err);

            res.status(200).json(response);
        });
    }

    findById(req, res, next) {
        const id = req.params.id;

        UserService.findById(id, (err, response) => {
            if (err) return next(err);

            res.status(200).json(response);
        });
    }
}

export default new UserController();
