import { Politico } from "./Politico";

export class DeputadoEstadual extends Politico {
    private estado: string;
    private comissoes: string[];

    constructor(
        nome: string,
        partido: string,
        localTrabalho: string,
        enderecoTrabalho: string,
        remuneracao: number,
        projetos: string[],
        estado: string,
        comissoes: string[]
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Legislativo",
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos
        );

        if (comissoes.length < 1) {
            throw new Error(
                "O deputado deve participar de pelo menos uma comissão."
            );
        }

        this.estado = estado;
        this.comissoes = comissoes;
    }

    public exercerMandato(): string {
        return "O Deputado Estadual legisla sobre assuntos de interesse do Estado e fiscaliza o Governador.";
    }

    public votarPPA(): string {
        return "Votar o PPA do Estado.";
    }

    public votarLDO(): string {
        return "Votar a LDO do Estado.";
    }

    public votarLOA(): string {
        return "Votar a LOA do Estado.";
    }

    public proporEmenda(): string {
        return "Propor emendas à Constituição Estadual.";
    }

    public criarCPI(): string {
        return "Criar uma CPI estadual.";
    }
}