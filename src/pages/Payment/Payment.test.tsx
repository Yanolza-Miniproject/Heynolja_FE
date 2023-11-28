import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Payment from '.';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

// useRecoilState를 mock하기 위한 코드
jest.mock('recoil', () => ({
  ...jest.requireActual('recoil'),
  useRecoilState: jest.fn(),
}));

const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RecoilRoot>{children}</RecoilRoot>
        </BrowserRouter>
      </QueryClientProvider>
    );
  };

describe('Payment 컴포넌트', () => {
  test('orderID가 null이면 NotFound 컴포넌트가 렌더링되어야 함', () => {
    // useRecoilState가 order_id를 null로 반환하도록 설정
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    jest.spyOn(require('recoil'), 'useRecoilState').mockReturnValue([ { order_id: null }, jest.fn() ]);

    render(<Payment />, { wrapper: createWrapper() });

    // NotFound 텍스트가 있는지 확인
    const notFoundText = screen.getByText('뒤로가기');
    expect(notFoundText).toBeInTheDocument();
  });

});
