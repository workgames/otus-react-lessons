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
  });

  it('Загружен пользователь', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: fakeUser });
    const { getByTestId } = render(<UserInfo userId={1} />);
    const userinf = await waitFor(() => getByTestId('user-info'));
    expect(userinf).toBeInTheDocument();
  });

  it('Click button back user list', async () => {
    const onClick = jest.fn();
    (axios.get as jest.Mock).mockResolvedValue({ data: fakeUser });
    const { findByText } = render(<UserInfo onClickBack={onClick} userId={1} />);
    const buttonBack = await waitFor(() => findByText('Вернуться к списку'));

    fireEvent.click(buttonBack);
    expect(onClick).toHaveBeenCalled();
  });
});
