import React from 'react';
import { cleanup, render, waitFor, fireEvent } from '@testing-library/react';
import { UserInfo } from '@/Components/Users/UserInfo';
import axios from 'axios';

jest.mock('axios');
afterEach(cleanup);

const fakeUser = {
  id: 1,
  name: 'Test User 1',
  username: 'testuser1',
};

describe('User List', () => {
  it('Загрузка пользователя процесс', () => {
    const { getByText } = render(<UserInfo userId={1} />);

    expect(getByText('Идеть загрузка загрузка пользователя')).toBeInTheDocument();
    cleanup();
  });

  it('Загружен пользователь', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockResolvedValue({ data: fakeUser });
    const { getByTestId } = render(<UserInfo userId={1} />);
    const userinf = await waitFor(() => getByTestId('user-info'));
    expect(userinf).toBeInTheDocument();
    cleanup();
  });

  it('Click button back user list', async () => {
    const onClick = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockResolvedValue({ data: fakeUser });
    const { findByText } = render(<UserInfo onClickBack={onClick} userId={1} />);
    const buttonBack = await waitFor(() => findByText('Вернуться к списку'));

    fireEvent.click(buttonBack);
    expect(onClick).toHaveBeenCalled();
    cleanup();
  });
});
