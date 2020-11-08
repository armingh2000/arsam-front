// Event Fields :
// name : string,
// description : string,
// is_private : bool,
// members : array of strings
// time and date : ???
// event type : ???

export const editEventInfo = (eventId, fieldName, newValue) =>
{
    return {
        type: "EDIT_EVENT_INFO",
        payload:
        {
            fieldName,
            newValue,
            eventId
        }
    }
}


