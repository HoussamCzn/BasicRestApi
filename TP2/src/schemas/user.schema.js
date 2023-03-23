module.exports = {
    "title": "user",
    "description": "Représente un utilisateur",
    "type": "object",
    "properties": {
        "lastName": {
            "type": "string"
        },
        "firstName": {
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
    "required": ["id", "lastName", "firstName", "email", "birthday"],
    "additionalProperties": false
}