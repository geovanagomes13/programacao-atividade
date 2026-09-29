import { Politico } from "./Politico";

export class Presidente extends Politico {
    private quantidadeMinistros: number;

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        quantidadeMinistros: number
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Executivo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        this.quantidadeMinistros = quantidadeMinistros;
    }

    public exercerMandato(): string {
        return "O Presidente propõe, sanciona e veta leis e edita medidas provisórias.";
    }

    public nomearMinistro(): string {
        return "Nomear Ministros de Estado.";
    }

    public exonerarMinistro(): string {
        return "Exonerar Ministros de Estado.";
    }

    public comandarForcasArmadas(): string {
        return "Comandar as Forças Armadas.";
    }

    public representarPais(): string {
        return "Representar o país em eventos internacionais.";
    }

    public elaborarPPA(): string {
        return "Elaborar e enviar ao Congresso o PPA nacional.";
    }

    public elaborarLDO(): string {
        return "Elaborar e enviar ao Congresso a LDO nacional.";
    }

    public elaborarLOA(): string {
        return "Elaborar e enviar ao Congresso a proposta de LOA nacional.";
    }
}