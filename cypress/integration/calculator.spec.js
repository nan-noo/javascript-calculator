//- [x] 2개의 숫자에 대해 덧셈이 가능하다.

it('덧셈에 대한 테스트 케이스' , () => {
	cy.visit('index.html');
	cy.get('.digit').contains(2).click();
	cy.get('.operation').contains('+').click();
	cy.get('.digit').contains(5).click();
	cy.get('.opertaion').contains('=').click();
	
	cy.get('#total').should('have.text', '11');
});

//- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.


//- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
//- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
//- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
//- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
//- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.