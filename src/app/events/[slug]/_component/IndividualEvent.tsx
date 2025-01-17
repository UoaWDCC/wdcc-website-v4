import React from "react";

import ImageFit from "@/components/ImageFit";

const IndividualEvent = () => {
    return (
        <div className="flex flex-col py-16">
            <div className="grid grid-cols-2 gap-16">
                <p className="text-md">
                    Are you ready to dive into the world of AI and get ahead in your career?
                    <br />
                    <br />
                    The AI revolution is already transforming industries and NOW is your chance to be part of it! 🤖✨
                    With 97 million new AI-driven jobs expected by 2025, students with AI expertise are in higher demand
                    than ever! 🔥
                    <br />
                    <br />
                    Join us on Thursday 3rd October for AI Unplugged, a WDCC x Chiasma workshop that will break down
                    everything you need to know about AI and its impact on your future endeavours 💡.
                    <br />
                    <br />
                    Whether you’re looking to leverage AI in your own projects or gain insight into how AI can boost
                    your employability, this event has something for everyone. 🌟
                    <br />
                    <br />
                    As always, free dinner is on us! 😋🥟 Make sure to sign up with the link in our bio 🔗, see you
                    there!
                </p>
                <ImageFit src="/eventmock/2024_wdcc_x_chisma.png" alt="" height="500px" width="500px" />
            </div>
            <div className="mt-8">
                <h3 className="text-3xl font-semibold">Collab Partners</h3>
                <div className="flex gap-4">
                    <ImageFit src="/eventmock/collab_partner_placeholder_a.png" alt="" height="101px" width="300px" />
                    <ImageFit src="/eventmock/collab_partner_placeholder_a.png" alt="" height="101px" width="300px" />
                </div>
            </div>
        </div>
    );
};

export default IndividualEvent;
