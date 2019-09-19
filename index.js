# BotTestevar Twit =  require ( " twit " );
var config =  require ( " ./config " );
const  request  =  require ( " solicitação " );

var cliente =  novo  Twit (config);
 URL  const =  config . site_url ;

// Heroku
const  express  =  require ( " expresso " );
const  PORT  =  5000 ;
var http =  require ( " http " );
var app =  express ();

app . use ( express . static ( " cliente " ));

app . listen ( PORT , função () {
    console . log ( "Em execução " );
});
// Heroku

var stream =  cliente . stream ( " status / filtro " , {
    faixa : [ " maicon küster " , " maicon kuster " ]
});

stream . ativado ( " tweet " , tweet  => {
    pedido . get ( URL  +  " getalldata " , ( erro , resp , corpo ) => {
        const  arrayBlocks  =  JSON . analisar (corpo). dados ;
        const  arroba  =  tweet . usuário . screen_name ;
        const  existe  =  arrayBlocks . alguns ( bloco  => bloco == arroba);
        if ( tweet . text . toLowerCase (). includes ( " rt @ " )) {
            retorno ;
        }
        se (existir) {
            console . log ( ` $ { arroba } bloqueado. (lista negra) ` )
            Retorna
        }
        printTweet (tweet);
        deixe id =  twittar . id_str ;
        retuitar (id);
        retorno ;
    });
});

função  retweet ( tweet_id ) {
    cliente . postagem ( " status / retweet /: id " , {id : tweet_id});
}

função  getDate () {
    deixe nDate =  nova  data (). toLocaleString ( " pt-BR " , {
        timeZone :  " America / Sao_Paulo "
    });
    return nDate;
}

função  printTweet ( tweet ) {
    // imprimir na tela ou twittar bonitinho
    deixe tweet_text =  twittar . texto ;
    deixe lang =  twittar . lang ;
    deixe data =  getDate ();
    deixe quem_tweetou =  twittar . usuário . screen_name ;
    console . log (
        ` TWEET FEITO \ n $ { tweet_text } \ n quem tweetou: $ { quem_tweetou } \ n hora: $ { date } \ n idioma: $ { lang } \ n \ n`
    );
}
