module.exports = {
    "title": "watchlist",
    "description": "Représente la watchlist d'un utilisateur",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "item_id": {
                        "type": "string",
                        "format": "uuid"
                    },
                    "status": {
                        "enum": ["must-see", "ongoing", "finished", "dropped"]
                    }
                }
            }
        },
        "owner": {
            "type": "string",
            "format": "uuid"
        },
        "id": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": ["name", "owner", "id"],
    "additionalProperties": false
}