import React from 'react';

export default function card(topic) {
    return (
        <div className="card">
            <h2>{topic}</h2>
            <ul>
                {topic.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};