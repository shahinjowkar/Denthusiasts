export default{
    name:  "comment",
    type: "document",
    title:"Comment",
    fields:[
    {
        name: "name",
        type: "string",
    },
    {
        title: "Approved",
        name: "approved",
        type: "boolean",
        description:"comment wouldn't show until it is approved"

    },
    {
        name: "email",
        type: "string",
    },
    {
        name:"comment",
        type: "text",
    },
    {
        name:"post",
        type:"reference",
        to:[{type:"post"}],
    }

    ]
}