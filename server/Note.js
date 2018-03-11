import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title     : { type: String },
    nameTask      : { type: String, required: true },
    nameProject     : { type: String },
    timeSpent     : { type: String },
    timeRange     : { type: String },
    createdAt : { type: Date }
});

mongoose.model('Note', NoteSchema);