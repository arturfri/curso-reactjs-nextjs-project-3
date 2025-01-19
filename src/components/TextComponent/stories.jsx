import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati magni nisi? Repellat quam ea totam voluptatibus animi in, facere sapiente ad quo repudiandae aliquam nemo molestias, delectus sequi nam?',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
