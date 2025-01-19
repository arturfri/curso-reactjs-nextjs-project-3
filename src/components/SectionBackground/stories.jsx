import SectionBackground from '.';
import SectionContainer from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, cum
          magnam voluptatum incidunt dolore aliquid, odit facere rerum
          doloremque aut nihil, qui magni autem. Harum, molestiae!
          Necessitatibus explicabo voluptatem dolorum?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
