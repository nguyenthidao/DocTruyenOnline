/**
 * Created by dao on 5/23/17.
 */
var pageIndex = 1;
showDivs(pageIndex);

function plusDivs(n) {
    showDivs(pageIndex += n);
}

function currentDiv(n) {
    showDivs(pageIndex = n);
}

function showDivs(n) {

}