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
        "birthdate": {
            "type": "string"
        },
        "watchlists": {
            "type": "array",
            "items": {
                "type": "string",
                "format": "uuid"
            }
        },
        "id": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": ["lastName", "firstName", "email", "birthdate", "id"],
    "additionalProperties": false
}