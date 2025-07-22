module.exports = {
    usuarios: [],
    empresas: [
        {
            id: '1',
            nome: 'Tech Solutions',
            descricao: 'Empresa de soluções tecnológicas para o mercado financeiro.',
            emailContato: 'contato@techsolutions.com',
            telefone: '11999990001',
            funcionarios: Array.from({ length: 15 }, (_, i) => `Funcionário ${i + 1} - Tech Solutions`),
            imagem: '',
            curriculos: []
        },
        {
            id: '2',
            nome: 'Green Energy',
            descricao: 'Atuamos no setor de energia renovável e sustentabilidade.',
            emailContato: 'contato@greenenergy.com',
            telefone: '11999990002',
            funcionarios: Array.from({ length: 15 }, (_, i) => `Funcionário ${i + 1} - Green Energy`),
            imagem: '',
            curriculos: []
        },
        {
            id: '3',
            nome: 'Health Care Plus',
            descricao: 'Clínica médica especializada em atendimento personalizado.',
            emailContato: 'contato@healthcareplus.com',
            telefone: '11999990003',
            funcionarios: Array.from({ length: 15 }, (_, i) => `Funcionário ${i + 1} - Health Care Plus`),
            imagem: '',
            curriculos: []
        },
        {
            id: '4',
            nome: 'EduTech Academy',
            descricao: 'Plataforma de educação online focada em tecnologia e inovação.',
            emailContato: 'contato@edutechacademy.com',
            telefone: '11999990004',
            funcionarios: Array.from({ length: 15 }, (_, i) => `Funcionário ${i + 1} - EduTech Academy`),
            imagem: '',
            curriculos: []
        }
    ]
};
