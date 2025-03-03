const fs = require('fs');

const nameMainFile = process.argv[2];
const folderPath = `./${nameMainFile}`;

const createComponentStructure = () => {
  try {
    fs.mkdirSync(folderPath);
    fs.writeFileSync(styledFilePath, styledFileData);
    fs.writeFileSync(componentFilePath, componentFileData);
    fs.writeFileSync(storiesFilePath, storiesFileData);
    fs.writeFileSync(testFilePath, testFileData);
  } catch (error) {
    console.log({ error });
    process.exit(1);
  }
};

const styledFilePath = `${folderPath}/styles.js`;
const styledFileData =
  "import styled, { css } from 'styled-components';\n\nexport const Container = styled.div`\n\t${({ theme }) => css``}\n`;\n";
const componentFilePath = `${folderPath}/index.jsx`;
const componentFileData =
  "import React from 'react';\nimport P from 'prop-types';\nimport * as Styled from './styles';\n\nconst " +
  nameMainFile +
  ' = ({ children }) => {\n  return (\n    <Styled.Container>\n      <h1>{children}</h1>\n    </Styled.Container>\n  );\n};\n\nexport default ' +
  nameMainFile +
  ';\n\n' +
  nameMainFile +
  '.propTypes = {\n  children: P.node.isRequired,\n};\n';
const storiesFilePath = `${folderPath}/stories.jsx`;
const storiesFileData =
  'import ' +
  nameMainFile +
  " from '.';\n\nexport default {\n  title: '" +
  nameMainFile +
  "',\n  component: " +
  nameMainFile +
  ",\n  args: {,\n    children: '" +
  nameMainFile +
  "',\n  },\n  argTypes: {,\n    children: { type: 'string' },\n  },\n};\n\nexport const Template = (args) => {\n  return (\n    <div>\n      <" +
  nameMainFile +
  ' {...args} />\n    </div>\n  );\n};\n';
const testFilePath = `${folderPath}/${nameMainFile}.test.jsx`;
const testFileData =
  "import { screen } from '@testing-library/react';\nimport { renderTheme } from '../../styles/render-theme';\nimport " +
  nameMainFile +
  " from '.';\n\ndescribe('<" +
  nameMainFile +
  " />', () => {\n  it('should render correctly', () => {\n    renderTheme(<" +
  nameMainFile +
  '>' +
  nameMainFile +
  '</' +
  nameMainFile +
  ">);\n    expect(screen.getByRole('heading')).toBeInTheDocument();\n  });\n});";

createComponentStructure();
