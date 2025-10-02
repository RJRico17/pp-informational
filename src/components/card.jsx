import React from 'react';

export default function card(topic) {
    return (
        <div className="card">
            <h2>{topic.title}</h2>
            <p>{topic.desc}</p>
            <ul>
                <li>{topic.item}</li>
                <li>{topic.item}</li>
                <li>{topic.item}</li>
            </ul>
        </div>
    )
};