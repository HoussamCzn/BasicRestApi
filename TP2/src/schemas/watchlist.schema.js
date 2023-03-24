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
            "details": {
                "type": "object",
                "properties": {
                    "item_id": "number",
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
    "required": ["owner", "id"],
    "additionalProperties": false
}