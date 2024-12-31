new Counter('#example1');
new Counter('#example2');
new Counter('#example3', {
    target: 10000,
    type: 'both',
    suffix: '%',    
    format: (value) => value.toLocaleString()
});