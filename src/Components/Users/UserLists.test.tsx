import React from 'react';
import { cleanup, render, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserList } from '@/Components/Users/UserList';
import axios from 'axios';

jest.mock('axios');
afterEach(cleanup);
const fakeUsers = [
  {
    id: 1,
    name: 'Test User 1',
    username: 'testuser1',
  },
  {
    id: 2,
    name: 'Test User 2',
    username: 'testuser2',
  },
];

describe('User List', () => {
  it('Загрузка пользователей процесс', () => {
    const { getByText } = render(<UserList />);

    expect(getByText('Идеть загрузка списка пользователей')).toBeInTheDocument();
    cleanup();
  });

  it('Загружен список пользователей', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockResolvedValue({ data: fakeUsers });
    const { getByTestId } = render(<UserList />);
    const userList = await waitFor(() => getByTestId('user-list'));
    expect(userList).toBeInTheDocument();
    cleanup();
  });

  it('it displays a row for each user', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockResolvedValue({ data: fakeUsers });
    const { findAllByTestId } = render(<UserList />);
    const userList = await waitFor(() => findAllByTestId('user-item'));
    expect(userList).toHaveLength(2);
    cleanup();
  });

  it('Список кнопок "Данные о пользователе"', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockResolvedValue({ data: fakeUsers });
    const { getAllByText } = render(<UserList />);
    const userButtons = await waitFor(() => getAllByText('Данные о пользователе'));
    expect(userButtons).toHaveLength(2);
    cleanup();
  });

  it('Нажатие на кнопку "Данные о пользователе" и загрузка данных о пользователе', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockResolvedValue({ data: fakeUsers });
    const { getAllByText, findByTestId } = render(<UserList />);
    const userButtons = await waitFor(() => getAllByText('Данные о пользователе'));
    userEvent.click(userButtons[0]);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockResolvedValue({ data: fakeUsers[0] });
    const userInfo = await findByTestId('user-info');
    expect(userInfo).toBeInTheDocument();
    cleanup();
  });

  it('Click button back', async () => {
    const onClick = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockResolvedValue({ data: fakeUsers });
    const { findByText } = render(<UserList onClickBack={onClick} />);
    const buttonBack = await waitFor(() => findByText('Вернуться назад'));

    fireEvent.click(buttonBack);
    expect(onClick).toHaveBeenCalled();
    cleanup();
  });
});
