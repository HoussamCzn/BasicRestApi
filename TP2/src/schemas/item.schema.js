module.exports = {
    "title": "item",
    "description": "Représente un film ou une série",
    "type": "object",
    "properties": {
        "title": {
            "type": "string"
        },
        "genre": {
            "type": "string",
        },
        "language": {
            "type": "string",
        },
        "duration": {
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
    "required": ["id", "title", "genre", "language", "duration", "tmdb_id"],
    "additionalProperties": false
}