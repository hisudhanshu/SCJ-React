import React from 'react';
import { Card, Accordion } from '@themesberg/react-bootstrap';

export default (props) => {
  const { defaultKey, data = [], className = "" } = props;

  const AccordionItem = (item) => {
    const { eventKey, title, description } = item;

    return (
      <Accordion.Item eventKey={eventKey}>
      </Accordion.Item>
    );
  };

  return (
    <Accordion className={className} defaultActiveKey={defaultKey}>
      {data.map(d => <AccordionItem key={`accordion-${d.id}`} {...d} />)}
    </Accordion>
  );
};