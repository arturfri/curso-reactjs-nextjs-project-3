import SectionContainer from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          obcaecati placeat rerum consequuntur eligendi? Doloremque perferendis
          quae sequi doloribus hic reprehenderit ea, aspernatur non corrupti?
          Veritatis, natus dignissimos? Dignissimos, quibusdam!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
