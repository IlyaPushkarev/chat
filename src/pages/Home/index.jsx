import React from 'react';
import Message from "../../components/Message";
import Dialogs from "../../components/Dialogs";

const Home = () => {
    return (
        <section className={"home"}>
            <Message
                avatar={'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfEo5eXJQYUhYUlFZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                text={"Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"}
                date={new Date(2021, 1, 12, 18)}
                isMe={false}
            />

            <Message
                avatar={'https://images.unsplash.com/photo-1612831456327-9be2ebcfb715?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                text={"Hello!! Don't yet"}
                date={new Date(2021, 1, 12, 19)}
                isMe={true}
                isRead={true}
            />

            <Message
                avatar={'https://images.unsplash.com/photo-1612831456327-9be2ebcfb715?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                text={"Hello!! Don't yet"}
                date={new Date(2021, 1, 12, 19)}
                isMe={true}
                isRead={false}
                attachments={[
                    {
                        fileName: 'image.jpg',
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"

                    },
                    {
                        fileName: 'image.jpg',
                        url: "https://source.unsplash.com/100x100/?random=2&nature,water"

                    },
                    {
                        fileName: 'image.jpg',
                        url: "https://source.unsplash.com/100x100/?random=3&nature,water"

                    },
                ]}
            />

            <Message
                avatar={'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfEo5eXJQYUhYUlFZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
                isTyping={true}
            />

            <Message
                avatar={'https://images.unsplash.com/photo-1612831456327-9be2ebcfb715?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                date={new Date(2021, 1, 12, 19)}
                isMe={true}
                isRead={false}
                audio={"http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg"}
            />

            <Dialogs
                items={
                    [
                        {
                            message: {
                                text: "Hello it's mehttps://ima04703-89b55fcc595e?ixid=MXw",
                                isRead: true,
                                created_at: new Date(2021, 1, 14),
                                user: {
                                    id: 1,
                                    fullname: "Ivan Ivanov",
                                    avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfEo5eXJQYUhYUlFZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                                    unRead: 1,
                                    isOnline: false
                                },

                            }
                        },
                        {
                            message: {
                                text: "Are you a good programmer&",
                                isRead: false,
                                created_at: new Date(2021, 1, 15),
                                user: {
                                    id: 2,
                                    fullname: "Alan Turing",
                                    avatar: "https://media.newyorker.com/photos/5e2330c74156f60008818e30/4:3/w_1797,h_1348,c_limit/Grimstad-Turing.jpg",
                                    unRead: 1,
                                    isOnline: false
                                },

                            }
                        }
                    ]}
                userId={1}
            />
        </section>
    );
};

export default Home;