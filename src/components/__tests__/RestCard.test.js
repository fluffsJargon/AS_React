import RestCard, { withPromotedLabel }  from "../RestCard"
import MOCK_RES_CARD from "../mocks/resCardMock"
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";


it('should render RestCard component with props data', () => {
    render(<RestCard resData={MOCK_RES_CARD} />);

    const resName = screen.getByText('Subway');
    expect(resName).toBeInTheDocument();    
})


it('should render RestCard with promoted label', () => {
    const RestCardPromoted = withPromotedLabel(RestCard);

    render( <RestCardPromoted resData={MOCK_RES_CARD} />);

    const resName = screen.getByText('Promoted');

    expect(resName).toBeInTheDocument();    
})