import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Btn from '.';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';


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


describe('Btn 컴포넌트', () => {
  test('최초 진입 후 필수 약관에 동의하기 전까지 결제하기 버튼이 비활성화되어야 함', () => {
    render(<Btn />, { wrapper: createWrapper() } );

    // 결제하기 버튼이 비활성화되어 있는지 확인
    const goToPayButton = screen.getByText('결제하기');
    expect(goToPayButton).toBeDisabled();
  });
});
