module.exports = {
    "title": "user",
    "description": "Représente un utilisateur",
    "type": "object",
    "properties": {
        "nom": {
            "type": "string"
        },
        "prénom": {
            "type": "string"
        },
        "e-mail": {
            "type": "string",
            "format": "email"
        },
        "naissance": {
            "type": "string"
        },
        "watchlists": {
            "type": "array",
            "ids": {
                "type": "string",
                "format": "uuid"
            }
        },
        "id": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": ["id", "nom", "prénom", "e-mail", "naissance"],
    "additionalProperties": false
}