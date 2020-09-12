import React, { useState } from 'react';
import fetchEntries from '../utils/contentful';

import Title from '../components/title';

const Home = ({ data }) => {
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const [sendMsg, setSendMsg] = useState('send');

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setSendMsg('Sending...');
    const res = await fetch('/api/sendgrid', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        // 'Access-Control-Allow-Origin': 'http://localhost:8080/',
        // 'Access-Control-Request-Method': 'POST',
        // 'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(inputs, null, 2),
    });

    if (res.ok) {
      setInputs({
        email: '',
        message: '',
      });
      setSendMsg('send');
    }
    console.log(res, inputs);
  };

  return (
    <main>
      <Title value={data.title} />
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleOnChange}
          value={inputs.email}
        />
        <input
          type="text"
          name="message"
          onChange={handleOnChange}
          value={inputs.message}
        />
        <button type="submit">{sendMsg}</button>
      </form>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetchEntries();
  const [data] = res.map(p => {
    return p.fields;
  });

  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default Home;
