const message = [
        {
            _id: "1",
            title: "Nurbek Abdurahimov",
            messageArray: [
                {   _role: "he",
                    text: "Assalomu alekum ustoz. Baxi sabablarga ko'ra men bugun darsga borolmayman....",
                },
                {   _role: "me",
                text: "Vaalekum assalomu. Yaxshiman rahmt. Nega nima sababdan kelolmaysiz?....",
                },
                {   _role: "he",
                     text: "Ozgina mazam bo'lamyapti. Davolanib tezroq borishga harakat qilaman qilaman qilaman qilaman....",
                },
            ],
            
        },
        {
            _id: "2",
            title: "Eliboy Axmadjonov",
            messageArray: [
                {   _role: "he",
                    text: "Men bugun darsga borolmayman....",
                },
                {   _role: "me",
                text: "Men bugun darsga borolmayman....",
                },
                {   _role: "he",
                     text: "Men bugun darsga borolmayman....",
                },
            ],
        },
        {
            _id: "3",
            title: "Akbar Jumayev",
            messageArray: [
                {   _role: "he",
                    text: "Men bugun darsga borolmayman....",
                },
                {   _role: "me",
                text: "Men bugun darsga borolmayman....",
                },
                {   _role: "he",
                     text: "Men bugun darsga borolmayman....",
                },
            ],
        },
        {
            _id: "4",
            title: "Eshmat Toshmatov",
            messageArray: [
                {   _role: "he",
                    text: "Men bugun darsga borolmayman....",
                },
                {   _role: "me",
                text: "Men bugun darsga borolmayman....",
                },
                {   _role: "he",
                     text: "Men bugun darsga borolmayman....",
                },
            ],
        },
        {
            _id: "5",
            title: "Asadbek Rejabboyev",
            messageArray: [
                {   _role: "he",
                    text: "Men bugun darsga borolmayman....",
                },
                {   _role: "me",
                text: "Men bugun darsga borolmayman....",
                },
                {   _role: "he",
                     text: "Men bugun darsga borolmayman....",
                },
            ],
        }
];

const handleMessage = (state = message, action ) => {
    const massega = action.payload;
    const messageType = action.type;
    switch(messageType){
        case "ADD_MESSAGE":
            const exist = state.find((x)=> x.id === message.id);
            if(exist){
                return state.map((x)=> x.id === message.id ? {...x, qty: x.qty + 1}:x)
            }else{
                const message = action.payload
                return [
                    ...state, {
                        ...message, qty: 1,
                    }
                ]
            } break;

        case "DELETE_MESSAGE":
            const exist1 = state.find((x)=>x.id === message.id);
            if(exist1.qty === 1){
                return state.filter((x)=>x.id !== message.id)
            }else{
                return state.map((x)=>x.id === message.id? {...x, qty: x.qty - 1}:x)
        } break;

        default: return state;
    }
}

export default handleMessage