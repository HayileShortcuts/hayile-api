var mongoose = require("mongoose");

const ShortcutSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    program:
    {
        operatingSystem: String,
        environment: String,
        shortcuts: [
            {
                tittle: String,
                values: [
                    {
                        description: String,
                        command: String,
                    },
                ],
            },
        ],
    },
});

const ShortcutModel = mongoose.model("shortcuts", ShortcutSchema);

module.exports = ShortcutModel;
