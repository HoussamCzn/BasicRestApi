module.exports = {
    "title": "item",
    "description": "Représente un film ou une série",
    "type": "object",
    "properties": {
        "title": {
            "type": "string"
        },
        "genre": {
            "type": "string"
        },
        "language": {
            "type": "string"
        },
        "duration": {
            "type": "string"
        },
        "tmdbId": {
            "type": "string"
        },
        "id": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": ["id", "title", "genre", "language", "duration", "tmdbId"],
    "additionalProperties": false
}