export abstract class Politico {
    private nome: string;
    private partido: string;
    private esfera: string;
    private poder: string;
    private localTrabalho: string;
    private enderecoTrabalho: string;
    private remuneracao: number;
    private projetos: string[];

    // private: impede o acesso direto aos atributos de fora da classe

    // constructor: recebe os valores necessários para criar o objeto.
    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[]
    ) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }
    // this: representa o objeto atual e armazena os valores nos atributos.

    // public: permite que o método seja chamado de fora da classe.
    public getNome(): string {
        return this.nome;
    }

    public getPartido(): string {
        return this.partido;
    }

    public getEsfera(): string {
        return this.esfera;
    }

    public getPoder(): string {
        return this.poder;
    }

    public getLocalTrabalho(): string {
        return this.localTrabalho;
    }

    public getEnderecoTrabalho(): string {
        return this.enderecoTrabalho;
    }

    public getRemuneracao(): number {
        return this.remuneracao;
    }

    public getProjetos(): string[] {
        return this.projetos;
    }

    public abstract exercerMandato(): string;
}