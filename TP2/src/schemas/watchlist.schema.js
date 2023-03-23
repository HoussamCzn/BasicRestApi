module.exports = {
    "title": "watchlist",
    "description": "Représente la watchlist d'un utilisateur",
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "détails": {
                "type": "object",
                "properties": {
                    "item_id": "number",
                    "statut": {
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