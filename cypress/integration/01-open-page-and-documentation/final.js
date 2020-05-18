it('visit todo app running at localhost', () => {
     cy         
	.visit('localhost:3000')
        .contains('todos');
});
