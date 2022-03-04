import { renderWithTheme } from 'utils/tests/helpers';

import { FormWrapper, FormLink } from '.';

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          my nice <a>link</a>
        </FormLink>
      </FormWrapper>
    );

    expect(container.parentElement).toMatchInlineSnapshot();
  });
});
