import { useEffect, useState } from "react";
import Header from "../components/Header";
import { supabase } from "../components/utils/supabaseClient";

export default function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => await getMessages())();
    (async () => await setupMessagesSubscription())();
  }, []);

  const onSendMessage = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget.message.value);
    let { data, error } = await supabase
      .from("messages")
      .insert([{ content: e.currentTarget.message.value }]);
  };

  const getMessages = async () => {
    let { data: messages, error } = await supabase.from("messages").select("*");
    setMessages(messages);
    // console.log("Message", messages);
  };

  const setupMessagesSubscription = async () => {
    return supabase
      .from("messages")
      .on("INSERT", (payload) => {
        setMessages((previews) => [].concat(previews, payload.new));
        // console.log("Change received!", payload);
      })
      .subscribe();
  };
  return (
    <div className="">
      <Header />
      <form
        className="flex justify-center pt-10 text-black"
        onSubmit={onSendMessage}
      >
        <label htmlFor="Type anything"></label>
        <input
          className="border-2 border-black p-4"
          placeholder="type anything"
          type="text"
          name="message"
          required
        />
        <button className="border-2 bg-yellow-600 p-4 rounded-lg" type="submit">
          Send
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        {messages.map((message, index) => {
          return (
            <p
              className="border-2 rounded-full p-1 m-1 bg-gray-100"
              key={index}
            >
              {message.content}
            </p>
          );
        })}
      </div>
    </div>
  );
}
