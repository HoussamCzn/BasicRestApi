module.exports = {
    "title": "item",
    "description": "Représente un film ou une série",
    "type": "object",
    "properties": {
        "titre": {
            "type": "string"
        },
        "genre": {
            "type": "string",
        },
        "langue": {
            "type": "string",
        },
        "durée": {
            "type": "number"
        },
        "tmdb_id": {
            "type": "number"
        },
        "id": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": ["id", "titre", "genre", "langue", "durée", "tmdb_id"],
    "additionalProperties": false
}