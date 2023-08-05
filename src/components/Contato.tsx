import "./ContatoModule.css";

function Contato() {
  return (
    <div id="Contato" className="wrappercontatoall">
      <div className="wrappercontato">
        <div className="wrappercontatoleft">
          <h1>Empresa</h1>
          <h2>
            InteriorBr Studio, Ltd <br />
            Rua João. S,357
            <br /> São Paulo, Brasil
          </h2>
        </div>
        <div className="wrappercontatomid">
          <h1>Sobre nós</h1>
          <h2 className="detail">Referências</h2>
          <h2 className="detail">Serviços</h2>
          <h2 className="detail">Contrato</h2>
          <h2 className="detail">Time</h2>
        </div>
        <div className="wrappercontatoright">
          <h1>Contatos</h1>
          <h2>interiorbr@gmail.com</h2>
          <h2>(xx)xxxxx-xxxx</h2>
          <h2>(xx)xxxxx-xxxx</h2>
        </div>
        <div className="wrappercontatoseguir">
          <h1>Nos Siga</h1>
          <div className="sigaicon">
            <a className="links" href="https://pt-br.facebook.com/">
              <img
                className="facebook"
                src="data:image/jpeg;base64,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"
                alt="facebook icon"
              />
            </a>
            <a className="links" href="https://twitter.com/i/flow/login">
              <img
                className="twitter"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz51Dcfo0y4J_ufJJv5Va1x1Dy11wEOFH0yg&usqp=CAU"
                alt="twitter icon"
              />
            </a>
            <a className="links" href="https://www.instagram.com/">
              <img
                className="instagram"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBAQDxAPEA8PFQ8VDhAQDxAQDw8PFRcXFxUWFhUYHSggGB8mHxUWITEtJSkrLi4uFx8zODYtNygtLi4BCgoKDg0OFxAQGi4lICUrKystLS0tLS0tLS0tLS0rLSstLS0uLS0tLS0rLS0tLS0tLS0tLSstLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIFBgcEAwj/xABMEAABAwIBBQcQCQEIAwEAAAABAAIDBBEFBhIhMUEHUWFxgZGyExYiMjRCUlRyc5KTobHB0RQjJDNTYoLC0qIVFyVDY6Oz4TVE8IP/xAAbAQABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EADkRAAEDAQIJCwMEAwEAAAAAAAEAAgMEESEFEjFBUVJxkbETFCIjMmGBodHh8DNywTRCsvEVYpJT/9oADAMBAAIRAxEAPwDcUIQkkhcOI4pT0zc6eVkY2Zx7J3ktGl3IFVsrctmwF0FLmvmFxJIdMcR2gDvnewcOkLNauqkmeZJXuke7W55JPFwBWFPQOkGM+4eZ9PHco8k4bc28rRMR3SYmkingfJ+eRwjbxgC5PLZQNRuhV7u16hGNmZGSR6RPuVTSKzZRwMyN33+3kg8o92dT7stMSP8A7J5IoB+xJ154l4y71cP8FAIRubxag3D0RGl2lT3XnifjT/Vw/wAE3ryxLxp/oQ/xUGkXebxag3BFaCp3ryxLxp/oQ/xSdeWJeNP9CH+Kg0JchFqN3BGa1TnXjiXjT/Qi/ijrxxLxqT0I/wCKgkJc3i1G7gihqnOvHEvGpPQj/il68cS8ak9CP+KgUJchFqN3BFawKc68cS8ak9CP+Kd144l41J6Ef8VAoS5vFqN3BEbGNCnevHEvGpPQj/il688T8af6uL+CgUJchFqN3BFETdCn+vTEvGnerh/gnNy3xMf+zzwwH9ir6FzkItRv/I9EQRM1RuVrp90LEGdsYZPLitf0C1TdBumt1VFOQNroXg/0Ot71nKEF9JA79o8LuCRpYzmW7YRj1NVj6iVryNLmdrI0cLDp5dSlV87xvc1wc1zmuabtc0lrmnfBGkLQsk8vDdsNcRY2DKiwGnel2fqHLtKrZ8Hloxo7xoz+6izUTmi1l/dn91oyEgN9SVVygoQhCSSFSMv8qDTj6NA60zx9a8HTFGdQB2OPsGnaCrTjOINpoJZ36omk21ZztTW8pIHKsKq6p80j5ZDnOkcXPO+T8FYYPphI4vdkHmfbLuQZnECwZ15pLpLour6xR2xIuhCRdR2xoQhCSM2NCEltm3e2rrjwupd2tPUO8mCV3uCRNmVGEa5EKRbgFcdVHVctPKPeF6DJqv8AFKj1L0wyMGUjeEQNGlRKFL9bGIeKT+rcjrXxDxSf0ClysesN4RQG6QohCl+tfEPFJ/VlHWxiHik/q3JcqzWG8IgxdI3qIQpY5MV/ilR6pyYcn64a6Sp5KeU+4LnKM0jeEUFukbwo1C7X4PVt7amqW+VBIPe1cbmkGxFjvHQeZdtByIzG25EiEqFy1FDUIslRZctTw1CEtktk21EDVfNz3Kctc2jnddrtFO8nS134ZO8dm8dG0W0tfPTTbsgSCNRBsQd8FbTkli30uljkdbPHYS+cbrPKCHfqVPXQgHlG58u3347VU4QpgzrG5Dl2+/HapxCEKvVYqBur15bFBTg/eOc9/ksFgDyuv+lZqrZun1GdXZuyKKNtuElzj0gqktHRNxIG99+/2sS5O02oQhClWojYkIQrpkPkf9JtU1IIgB+rj1GYjad5nv4tYpZWxtxnImIGi0qFyfyXqq3TG0Mh2zSXDOHNGtx4tG+QtAwrc+o4bGXOqHja8lsd+Bg2cZKtkcYaA1oDWtADWgAAAagBsXoqSavlk7JxR3evwdyEXkrmpKGGEWiijjG9GxrB7AulcdbiMEAvNNFENnVJGsvxXOlRM2WmGs0GpB8iOaQc7WkKK2N7+yCd5XAxzsgtViQqs7L3DhqleeKGT4hMO6Dh/hS+qKfzeXUO4p/ISap3FWxCqX94GH+FN6oo/vAw/wAKb1R+a7zaXVO5LkJdU7irahVL+8DD/Cm9Ufml/vAw/fm9UfmlzaXVO5d5vLqncVbEKpjL/DvDk9U5Pbl7h34rxxwv+AXOby6h3FLm02odxVpXhUU0cozZGMe3ee0OHMVBxZa4a42FS39UczBzuaApWkxSnn0QzwyHeZI1zhxgG4THRvbeWkeBTXRPZe5pHgQoTFMhaGe5awwP2Ohs1voG7eYBUPKDI6ppAXi00I1vjBBaN97dbeMXHCFsqEeKslZlNo0H1RoaySPPaNB9V87gJbLQstcjgA6ppG2tcywtGi2suYPeObeNAAVtHO2RuM1XsErJm4zf6TbJbJbJ1k4uRw1NsrtuX1xZPLAT2Mjc5o2Z7Ds4w4+iFTLKayOm6nXUzt94b6bSz9yjz9KNw7uF6FUx48L29x8rx5rZ0IQqVZZYtugOviVRwGEf7TFXlP5ef+SqfKj/AOJigVpIHdUz7RwCsGRXBIhLZFk8uRhGprJDBPptS2N1+os7OYjR2A1NvvuOjiudi2uJgaA1oDWtAAAFgANAAGxVTc1wwQ0nVSOzqXFx3+ptu1g4tbv1q3qjrJjJIRmFyr53Wvs0LwrKqOFjpJXBkbBdznagFl2UWXc8xcylJgi1Bw0TyDfJ7zk08OxLui44ZpzTMd9VAbPA1Pm03J8nVx53AqdZSKWna0BzrzwU2mpBYHOF6V7y4lziXOOtxJLieEnWm2TrIspxkVgI02yWydZLZNx08RplkWXpZJZc5RPEabZFk+ydZc5RPDF5WS2XpZFl3lE7ETLIG/fSNR2gqYyfwGWtkLWWa1tjI9wJawHVo2k2NhwK8Dc5ps2xmqM/wvqw2/k5vxQnVTGGwlR5qqKF2K439yquA5Z1VMQ2Rzp4trZHXkaPyvOnkNxxa1qWF4jFVRNlhdnMdyOa7a1w2ELIsosnpqFwDiHRvvmSNFg62sEd6eD/ALXTkZjbqSoaHH6iUhso2C+hr+C3uvwKPNEyRuOzLxUapo45o+Uhsty3Z/fztuWwrJcvMCFNMJIxaGe5AGqOTvm8A2jlGxa0oPK7D/pFHMwC7mAyR7+ewXsOMXb+pRaeTEfbmzqtop+SlGg3H53LGgEtk5IrW1ahCkMANqul8/T/API1R67sC7qpvPU//I1Nd2TsKY/snYeC3FCEKkWOWK5df+RqfKj6DFA2U/lwP8RqfKZ0GKDsr2N9kbdg4LQQx9BmwcEyyUA6La9nGnWXbg8edUU7fClhHO9oXDJZejhlgtW34fTCGKKJuqJjGDiaAPgm4lUiCGWU6omPfx5oJt7F1qv5byZmH1JG0NbyPe1p96pm3kArORtx3tbpIG9Y49xcS5xu5xJcTrLjpJTbL0siyszKtXyaZZOsn5qM1M5VODEyyLLoggc9zWMaS5xs1rRdzjwBXvAcgBYPrHG/4DHWA4HvGv8ATbjKG6cBDnligFsh8M52D1sWfxxFxDWtLnHU1oJceIBSUWTla/S2lnt+aNzOlZbFRYfDA3NhiZGPyNAvxnbyrrQjUnMFVvwtqM3+yxSXJquaLmmn/TGX+xt1HS07mHNe1zXeC9pa7mK3xc9VSxytzJWMkadbXtDhzFcFQc6TMLkdpm4n82hYRmpc1aVjeQkTwX0p6k/wHEmJ3EdbfaOBUGuopIHmOVha5utp94OojhCeJrVbU9TFOOgb9Gf5sWj7nETW0Vx2z5Hl+/cAAewDnVrWUZIZSfQ3OZIC6GQguze2Y/VnAbdFgeIb1jfRlRQZud9Jjtvdlneha/sQJAcYlUVfSyidzg0kE2ggW+G1ce6BG00Mhda7HRFnA7ODdHI53OsoVoyxylFYWxRBzYWHOu7Q6R+oEjYBc241WFKgta29W2D4Hww2PuJJNmjJ6LZMla0z0VO8m7szNcTrLmXYSePNvyqYVR3N5M6jdvMle0cWax3xKtyhyABxAWfqmYkz2jSd2ZYVilP1KeaIao5JGDia4gewLlU1lmzNr6kfmB9Jod8VCq3YbWg9wWojdjMa7SAd4Qu7A+6qbz0H/I1cK7MF7qp/PQdNq67Idi6/snYeC3NCEKkWNWMZbj/EKnymdBqhbKey2H+IVPlM6DVCBqniXojYtdTs6pn2jgmZqkcnWXrKXz9OeZ7T8FxZqlMmG/babzsfSQnzXFFkZYx2wraVW90E/YJRvuh6YPwVkVZ3Qe4neXH71GBsvWWoxbURj/YcVlGalzV65qXNXTMtjiLyzV6wwOe5rGNLnOIDWjW5x1BLmq97nmDAB1U8aeyZDfYNTnft5Hb6YJbTYEKplbTxGQ+A0nMPz4KZyXydjomXIDp3Ds36w38jN4e/mAsKFBZSY/HRs1B8r79Tjv8A1O3h7+chxOcrJdbUy6XH5sAA8AFLVFQyJpfI9rGjW57g1o5SoOfLKhYbCR0lvAY63ObArOcSxGapfnyvLnabA9q0bwbqAXHZD5RXcOBWAda4k91w9eC1CDLWhcbF0jOF0Zt/TdTdFWxTNzoZGSN2ljg6x3jvLE170lXJC8SRPcxw1OabHiO+OA6E4OXZcCxEdW4g9949eK29RGPYLFWR5j9DxfqcgHZMPxG+PjYqOyUymbVjqctmVDRfRobKBrLd4745RttaE4FUb2S00thucPl3csPxCikp5HxSjNc02O8RsIO0HWuZaZl7gwmgM7B9bANNtboe+HJ23pb6zRGa5aikqBURB+fIdvy9NSJUiMHKStJ3MXfZph/rE87GfJXJUrcx+4n843ohXVRpO0Vkq/8AUv2/hZBl8LYhPw9RP+20fBV9WXdBH2+XyYuiFWirKF3QbsWjp/ox/a3gELswXumn89B02rkXXg3dNP56DptRXZCnSdk7DwW5oQhUixqyDLNv26o42dBqhg1TuWA+3VHG3ohQ+ahOmsuW4pWdRH9rf4heYapXJdv2ym84z3rgspPJruyn84z3oXK2osrbI37DwWvKtZf9xO8uNWVVvL7uJ3lx/FSJLmlY+g/UxfcOKzGyLJUKBjLbWJWMLiGtF3OIDRvk6Atmw+lEMUcQ1Rta3jsNJ5dayrJuPOq6a/4rD6JzvgtfUqnvtKzuHXm2Nm0/j1XhUzNjY+R5s2NrnOO81ouVj2KVr6mZ8snbOOgbGt70DiC0bLiYso5La3uY3kvc+wFZguTvsICLgSACN0pyk2eAsJ8+CRInIshYyvEyySydZCIHLlidBM6N7XsJa5pDmOGwhbFg9eKiCOUaM8DOHgvGhw5CCsbWh7m8xNPLGe8kuOAOaBbnaedGY5U+GYQ6ESZ2nyPvYrZJGHAgi4IIIOog61iuKUpgmlhPePe0X1loPYnlFjyrbllWXkWbWyHw2xO9gb+1FtUHAz7JXs0i3cfQlVtCVIiNctCVoe5j9zP5xvRV2VJ3MvuZ/OM6KuyY7KVksI/qX+HBZPuhd3P8mLohVlWfdC7uf5MXRVaU6J3RC0NL9CPYOCYuzBu6afz0HTauQrrwfumn89B02o9vRKfJ2TsK3NCEKnWMWTZY93VHGzohQ6mcsO7qjjb0Qoeyr3u6RW+pfoR/a3+ISWUnk13ZT+cZ71HKTyb7sp/OMQw68bQnzfSfsPBa4q3l73GfLj+KsiruXfcZ8uNWE303bFi8H/qovuHFZkhKhVWMtypHJt4bWU5P4jB6XY/Fa6sUhkLHMe3tmFrm8YNx7lslNO2RjJG9q9rXN4iLhTaN9uMFm8PRkOjf3Ebr/wA3KEy7hLqNxHePY48V839yzGy2eupmyxvid2sjXNPBcWuOJZBWUz4ZHxyCzmEhw4RtHAdfKuVQscCj4CmBidHnBt8DZwOXauayE5JZADleJElktkJ7XJtiRaBubRWgmfsdIAP0tB/eqAxhJAAJJIDQNJJOgALXsn8P+jU8cXfAAyHfkdpd7TbiAUmG8qnwzKGwYmdx8hf6KTWWZfSB1a8eC2Jp483O/ctTWMY3V9XqJpBqe95b5A0N9gCM82WKvwLHbK5+gcSPwCo9InJE5rlo1oW5l9zP5bOirqqXuZ/cz+cb0VdF1ZDCP6p/hwWUboPdz/Ji6KrRVm3QO7n+TF0VW1LjNwWipfoR7BwTV1YN3TT+eg6bVyldeD900/noOm1HBuKJJ2T48FuKEIVYsUspyx7un429FqhlNZYd3T8bOi1RFlUSu6TtpXoFL9CP7W/xCapLJvuum84z3rgAXfgAtVUx/wBWH2uAQmu6Q2hOlHVu2HgtcVdy6H2N3lxqxKByzF6OTgdH0greo+m7YeCxVAbKmI/7DisxzUZq981GaqPGW4xl4ZqvuQWJ58Zp3ns4ruZ5snSOQnmI3lScxetHO+F7ZIzmuYbg/A8B1cqLDNybw75YolbAKmExnLlHcfly2BVnKnJ0VY6pHZtQwW06BI3wSdh3jyHgk8FxSOqjDm6HC3VGE6WO28m8VJq6IZKzSCsex8tLNaLnD5Zs/sLFZ4HxuLHtc1ze2DhYheS2GvwyCoFpY2vtqdbs28TtYUBPkNTu0sklZwHMeB7AVAdSPBuvC0cGG4HjrAWnePXy8Ss9Q1hJAAJJ0AAEkneAGtX+DISEdvNK4bzQxvvup3DMGp6YfUxgHa89k8/qOrk0JzKeQ5bl2bDVOwdC1x3Dzv8AJQWSOTHUbT1A+tP3bNfU798783u49VwQuDE8QjpozJKbAagO2e7Y1o2lTmtDGrOTzy1UtpvJuAHAfO8qLy1xUU9OWtP1s12N3wwjs3cxtxkLL134xiUlVM6WTboY0amsGpo/+1krgKjOkxnWrVUNJzaINOU3nb7D1SJqemlEa5S1oW5n9xP5xvRCuap+5q37NKf9UjmY35q4IwyLHYR/Uv2/gLKcvu7pPJi6IVbKsOXhvXzcAiH+2w/FV8o7DctLTDqI/tbwCQrqwbumn89B02rlXVg3dNP56DptUgG5Pk7J2HgtwQhCgLELLMrx9tn42dFqiA1TWVzfts/6Og1RbWqilPTdtPFb6md1Ef2t/iEwNXdhBzZ4T4MkR5nArwDV6RgjSNY1caFjWG1Occa7StcUPlUzOo5hwMPM9p+Ck4ZQ9rXjU4AjiIuvOuh6pFIzw2PbykWC0ErcZjgM4PmFhoH8nKxxzEHcVlWajNXuY0mYs3jLbFy8c1IWr3zUhau2pYySkqZIXiSJxa4bRtG8RtCuuEZVRSANmtFJv/5R5e95edUktTS1HhqXxdndmUappIqgdMX6Rl+bVrTHggEEEHUQbgp6yenrJofu5Hs4GuIB4xqKkGZVVre/a7jjZ8AFYNwgwjpA8fRU78CyA9B4O20eo81pCFmsuVtbsfG3hbG343UVXYpUTfeTSPHgl1meiNHsTjXMzArseA5Sem8DZaT+OKvmMZV01OCGETSbGsIzAfzP1c1yqBiuJzVT8+V1/BaNDGjeaDq965LJqjPqHSZVd0mD4aa9l50nL4aPmVNQnFNTmuUxNKE5IUdrk1aPudNtSOOx0zyOINYPeCrWobJOlMVHADrc3PO/2ZLh7CByKZUtuQLEVr8eokd3lZDlk69fUHhaOZoHwUKV24zP1Wonk1h0kpHklxt7LLiRWuWuiZixsboAG4BNK68G7pp/PQdNq5iurBe6qfz0HTajg3Lj+ydh4LbkIQoixCzTKxv22bjZ0GqMa1TGVbftk3/59BqjWtWfmPWP2nittTu6iP7W/wAQmNavRrU5rV6Bqj2pxcrvkvVdUpmg647sPEO19hA5FNKiZO13UZeyNmSWa7eB713J8Sr2r6imEkQ0i4/hZXCEPJzE5jePyPmaxUXKbDjHMXgdhKS6+wP74fHl4FE5q0irpmTMLHi7Tzg743iqdiWCSwEkAvj2PaNQ/MNnuVdWUrmEvbkPl7Kzoa4PaGPPSHn7qHskLV0ZqaWqAHKzxlzlqYWrpLUwtTrU4OXMWrzc1dTmrzc1OBRGuXK5q8nNXU5q8nNTwUZrlzOCaV7OavJwRAUUG1MQUqRGa5JNUnk3hRqqhrLHqYs6U7AwaxxnUOPgTsHwCoqiMxpEffSOBawDgO08A9i0rBcKipYxHGNJ0vee2kdvn5bFNhYXXnIqnCOEG07S1ptfw7z+Bl8FIAW0DUo3KKuEFNLJexzS2PzjtDfab8ilFnGX2MCWQU7DeOEkyEanTaiP0i44yd5S3GwLO0FNy87W2XC87B65PFVApClKQpMK2BSFdmCd1U3noOm1ca7cCH2qm89T9NqkA3IUnYOw8FtaEIQFh1RMsYbVN/DYw+9v7VDNarXlpTXEco70ljuXSPcedVlrVn6wYszt+9auilxqdncLN1yGtXoGpWtXo1qiEoxcmhqsmA4ta0Up1aGOO94J+CgQ1eganQ1DoXYzf7UWeNszcV39K/IVUw7FpIrNd2bBqBOlo4Cp2nxGGTU8A+C7Qf8AvkV/BWxS5DYdB+X+CoZqWSPNaNI+XInwyCTS6NtzrI7EnlC435OU51dUbxOHxBU0hFfTRONrmjcE1lRKwWNcd6gjkvB4cvOz+K8zktH+LJ7FYUJnM4NVF59PrcFXTknF+K/mamdaEX4r/RarKhLmcGrx9V3/ACFTr8FVzkdF+NJ6LUhyMh/Gk5mq0oXeaQ6vFd/yVVr+Q9FVTkTB+LL/AEfJKMh6bbJPyGMftVpQu81i1U7/ACdXr8PRVePImkHfTkbxewD2NCkaXJ2ji0tgjJ333k6RNlLoTmwxjI0IUldUvudId9nkkSqLxDG6aC/VJWXHeAh0nojSOVU7G8tJZAWU4MTDreSOrOHARoZyXPCF18rW570+mwfPORitsGk3D38LVMZW5TCAGCA3nOhzhpEQ/l7tazklOKRAxy42laqlpGUzMRnidPzMM28lpTU4pqM0oxTVK5KQ59bSt/1A70AX/tUWVbdzejzqh8pHYwsIb5bjYewORwblFq34kD3dx87h5rSkIQmrGLkxKlE0T4z3w0cDhpB57KgmMtJa4WLSQRvEa1pKrmUWF3vMwaf8wDeHffNVuEacvbjtyjLs9lZYOqcQmN2Q5Nvuq61q9WtStavRrVQ2q3c5I1qeGp7Wp4amWoLnJgajNXsGpc1NtTcZecUz29q9zfJcQvb+0pxqkdygH3hMLU0tRGzPbc1xGwkcE0hru0AfBe39r1Ph/wBDPkmnG6nwx6DfkudzV5uaiiqm13bz6roiiP7RuHouo49U+E30AvM5QVPht9Bq43NXk4Igqptc7yitgh1RuC7TlJVeG30GrzdlLV+G31bVwPC8XhEFTNrHeUdtNDqN3Bd7sqKzw2+gz5LxkyordktuKOL4tUe8LweE8Tyn9x3lSGU0H/m3/kei7pMpK0/57+QMb7mqOqcTqJBaSaZwOx0jy3mvZMeF4OCcHuOUneVLjhjb2WgbAAmlIUpSFGaUUpqaU5BUlqYUwppT00qQ1MKaQtZyPwv6LTNDhaWTs5BtBOpvIABx3VUyHyeMzhUyt+qYfqwf8yQftB9ujYVpKkArO4XqgTyLc1525h4Z+/YhCEJKjQhCEklX8TwXSXwjhcz+PyUS1ttB0EawdYV2XLU0UcnbN0740HnVVVYNDzjRXHRm9uGxT4q4tFj7+/P7qsNavRrVJyYO4do4HgdoPOF5HD5R3vtBVNJSTsysPgLeFqk84jdkK5A1LmLp+ivHeO5kfR3+A7mUfk5B+07iucoFzFqa5q6zTP8AAdzJjqV/gP5ksR+g7iuh4XC5q8nNXe6kk8CT0SvJ1JL+G/0D8k8MfoO4+iM140rgcF4PCkHUcv4UnoH5LxfRTfhS+g75IjWO0FSGuCj3heDwpF1BN+FJ6t3yXi/D5/wpfVv+SKGu0KQ1wUc8LweFJPw2f8GX1T/kvF+F1H4M3qn/ACRWtdoKkteNKjHheDwpV+E1Hi9R6mT5LwfhFV4vP6mT5IrWnQpDXjSN6jimrv8A7Gq/Fqj1MnyR/YtXspqj1MnyRmg6E8vbpG8KOKCpmHJetfqgc3yi1nSIUpRZBzu++lZGN5t3u+AHOVKYxxzKLJW08fakG+3yFpVQVrybyQfMRLUhzItBDDdsknHtaPbxa1bMKybpaWzmsL5Bqkks5zT+Uam8gupxS2R2ZVSVeGMYYsF3ecvgM23LsK8oo2saGtAa1oAa0CwAGoAL1QhFVEhCEJJIQhCSSEIQkkhCEJJIQhCIuIQhC6khCEJJIQhCS4hCEJqSEIQuJIQhCRSQhCFxJCEIXE5CEISSQhCEkkIQhJJf/9k="
                alt="instagram icon"
              />
            </a>
          </div>
          <h2>
            © 2023. InteriorBr, Ltd,
            <br /> Todos os direitos reservados.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contato;