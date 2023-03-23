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
                        "enum": ["à voir", "en cours", "terminé", "abandonné"]
                    }
                }
            }
        },
        "propriétaire": {
            "type": "string",
            "format": "uuid"
        },
        "id": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": ["propriétaire", "id"],
    "additionalProperties": false
}