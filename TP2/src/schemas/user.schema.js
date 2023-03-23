module.exports = {
    "title": "user",
    "description": "Représente un utilisateur",
    "type": "object",
    "properties": {
        "last_name": {
            "type": "string"
        },
        "first_name": {
            "type": "string"
        },
        "email": {
            "type": "string",
            "format": "email"
        },
        "birthday": {
            "type": "string"
        },
        "watchlists": {
            "type": "array",
            "id": {
                "type": "string",
                "format": "uuid"
            }
        },
        "id": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": ["id", "last_name", "first_name", "email", "birthday"],
    "additionalProperties": false
}