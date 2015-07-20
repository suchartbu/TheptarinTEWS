//ตัวแปรค่าเริ่มต้น
var colWidth = .11;
var colTextSize = 8;
var colTextWidth = 1 - (colWidth * 7) ;
var numScore = 0;
var hiRisk = false;
var tewsScore = 0;
var row1IsChecked = false; //Respiration Rate
var row2IsChecked = false; //Oxygen Saturations
var row3IsChecked = false; //Any Supplemental Oxygen
var row4IsChecked = false; //Temperature
var row5IsChecked = false; //Systolic BP
var row6IsChecked = false; //Heart Rate
var row7IsChecked = false; //Level of Consciousness
var colorScore0 = "#ffffffff"; //สีขาว
var colorScore1 = "#ff00ff00"; //สีเขียว
var colorScore2 = "#ffffff00"; //สีเหลือง
var colorScore3 = "#ffff0000"; //สีแดง
var colorText = "#ff000000"; //สีดำ

var cM = .002; //Margins

//Called when application is started.
function OnStart()
{
     //Create the main layout.
    lay = app.CreateLayout( "linear", "FillXY" );
    
    
    //Create a full screen scroller
    scroll = app.CreateScroller( 1.0, 1.0 );
    lay.AddChild( scroll );
    
    //Create a layout with objects vertically centered.
    //Create a layout inside scroller.
    layVert = app.CreateLayout( "linear", "Left" );
    scroll.AddChild( layVert );
    
    //Create a text label and add it to layout.
    layHoriz = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layVert.AddChild( layHoriz );
    txtHeader = app.CreateText( "Theptarin Early Warning Score1");
    txtHeader.SetTextSize( 20 );
    layHoriz.AddChild( txtHeader );
    
    //ส่วนหัวของรายการ
    layHoriz = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz );
    txt = app.CreateText( "<b>PHYSIOLOGICAL\nPARAMETERS</b>",colTextWidth, 0.045 ,"Html,Multiline");
    txt.SetTextSize( colTextSize );
    layHoriz.AddChild( txt );
    
    txt = app.CreateText( "3" , colWidth,"Html,Multiline");
    txt.SetTextSize( 20 );
    layHoriz.AddChild( txt );
    
    txt = app.CreateText( "2" , colWidth ,"Html,Multiline");
    txt.SetTextSize( 20 );
    layHoriz.AddChild( txt );
    
    txt = app.CreateText( "1" , colWidth ,"Html,Multiline");
    txt.SetTextSize( 20 );
    layHoriz.AddChild( txt );
    
    txt = app.CreateText( "0" , colWidth ,"Html,Multiline");
    txt.SetTextSize( 20 );
    layHoriz.AddChild( txt );
    
    txt = app.CreateText( "1" , colWidth ,"Html,Multiline");
    txt.SetTextSize( 20 );
    layHoriz.AddChild( txt );
    
    txt = app.CreateText( "2" , colWidth ,"Html,Multiline");
    txt.SetTextSize( 20 );
    layHoriz.AddChild( txt );
    
    txt = app.CreateText( "3" , colWidth ,"Html,Multiline");
    txt.SetTextSize( 20 );
    layHoriz.AddChild( txt );
    
    //Create a layout with objects horizontal centered.
    layHoriz1 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz1.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz1 );
    txt = app.CreateText( "<b>Respiration Rate</b>",colTextWidth, 0.045,"Html,Multiline");
    txt.SetTextSize( colTextSize );
    layHoriz1.AddChild( txt );
    
    btnRespRate1 = app.CreateToggle( "<= 8", colWidth);
    btnRespRate1.SetOnTouch(CalcScoreR1);
    btnRespRate1.SetTextSize( colTextSize );
    layHoriz1.AddChild( btnRespRate1 );
    
    btnRespRate2 = app.CreateToggle( "", colWidth);
    btnRespRate2.SetOnTouch(CalcScoreR1);
    btnRespRate2.SetTextSize( colTextSize );
    layHoriz1.AddChild( btnRespRate2 );
    
    btnRespRate3 = app.CreateToggle( "9-12", colWidth);
    btnRespRate3.SetOnTouch(CalcScoreR1);
    btnRespRate3.SetTextSize( colTextSize );
    layHoriz1.AddChild( btnRespRate3 );
    
    btnRespRate4 = app.CreateToggle( "12-20", colWidth);
    btnRespRate4.SetOnTouch(CalcScoreR1);
    btnRespRate4.SetTextSize( colTextSize );
    layHoriz1.AddChild( btnRespRate4 );
    
    btnRespRate5 = app.CreateToggle( "21-24", colWidth);
    btnRespRate5.SetOnTouch(CalcScoreR1);
    btnRespRate5.SetTextSize( colTextSize );
    layHoriz1.AddChild( btnRespRate5 );
    
    btnRespRate6 = app.CreateToggle( "25-29", colWidth);
    btnRespRate6.SetOnTouch(CalcScoreR1);
    btnRespRate6.SetTextSize( colTextSize );
    layHoriz1.AddChild( btnRespRate6 );
    
    btnRespRate7 = app.CreateToggle( ">=30", colWidth);
    btnRespRate7.SetOnTouch(CalcScoreR1);
    btnRespRate7.SetTextSize( colTextSize );
    layHoriz1.AddChild( btnRespRate7 );
    
    //Create a layout with objects horizontal centered.
    layHoriz2 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz2.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz2 );
    txt = app.CreateText( "<b>Oxygen Saturations</b>",colTextWidth, 0.045,"Html,Multiline");
    txt.SetTextSize( colTextSize );
    layHoriz2.AddChild( txt );
    
    btnOxygen1 = app.CreateToggle( "<= 91", colWidth);
    btnOxygen1.SetOnTouch(CalcScoreR2);
    btnOxygen1.SetTextSize( colTextSize );
    layHoriz2.AddChild( btnOxygen1 );
    
    btnOxygen2 = app.CreateToggle( "92-93", colWidth);
    btnOxygen2.SetOnTouch(CalcScoreR2);
    btnOxygen2.SetTextSize( colTextSize );
    layHoriz2.AddChild( btnOxygen2 );
    
    btnOxygen3 = app.CreateToggle( "94", colWidth);
    btnOxygen3.SetOnTouch(CalcScoreR2);
    btnOxygen3.SetTextSize( colTextSize );
    layHoriz2.AddChild( btnOxygen3 );
    
    btnOxygen4 = app.CreateToggle( ">=95", colWidth);
    btnOxygen4.SetOnTouch(CalcScoreR2);
    btnOxygen4.SetTextSize( colTextSize );
    layHoriz2.AddChild( btnOxygen4 );
    
    btnOxygen5 = app.CreateToggle( "", colWidth);
    btnOxygen5.SetOnTouch(CalcScoreR2);
    btnOxygen5.SetTextSize( colTextSize );
    layHoriz2.AddChild( btnOxygen5 );
    
    btnOxygen6 = app.CreateToggle( "", colWidth);
    btnOxygen6.SetOnTouch(CalcScoreR2);
    btnOxygen6.SetTextSize( colTextSize );
    layHoriz2.AddChild( btnOxygen6 );
    
    btnOxygen7 = app.CreateToggle( "", colWidth);
    btnOxygen7.SetOnTouch(CalcScoreR2);
    btnOxygen7.SetTextSize( colTextSize );
    layHoriz2.AddChild( btnOxygen7 );
    
    //Create a layout with objects horizontal centered.
    layHoriz3 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz3.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz3 );
    txt = app.CreateText( "<b>Any Supplemental Oxygen</b>",colTextWidth,0.045,"Html,Multiline");
    txt.SetTextSize( colTextSize );
    layHoriz3.AddChild( txt );
    
    btnAnyOxygen1 = app.CreateToggle( "", colWidth);
    btnAnyOxygen1.SetOnTouch(CalcScoreR3);
    btnAnyOxygen1.SetTextSize( colTextSize );
    layHoriz3.AddChild( btnAnyOxygen1 );
    
    btnAnyOxygen2 = app.CreateToggle( "Yes", colWidth);
    btnAnyOxygen2.SetOnTouch(CalcScoreR3);
    btnAnyOxygen2.SetTextSize( colTextSize );
    layHoriz3.AddChild( btnAnyOxygen2 );
    
    btnAnyOxygen3 = app.CreateToggle( "", colWidth);
    btnAnyOxygen3.SetOnTouch(CalcScoreR3);
    btnAnyOxygen3.SetTextSize( colTextSize );
    layHoriz3.AddChild( btnAnyOxygen3 );
    
    btnAnyOxygen4 = app.CreateToggle( "No", colWidth);
    btnAnyOxygen4.SetOnTouch(CalcScoreR3);
    btnAnyOxygen4.SetTextSize( colTextSize );
    layHoriz3.AddChild( btnAnyOxygen4 );
    
    btnAnyOxygen5 = app.CreateToggle( "", colWidth);
    btnAnyOxygen5.SetOnTouch(CalcScoreR3);
    btnAnyOxygen5.SetTextSize( colTextSize );
    layHoriz3.AddChild( btnAnyOxygen5 );
    
    btnAnyOxygen6 = app.CreateToggle( "", colWidth);
    btnAnyOxygen6.SetOnTouch(CalcScoreR3);
    btnAnyOxygen6.SetTextSize( colTextSize );
    layHoriz3.AddChild( btnAnyOxygen6 );
    
    btnAnyOxygen7 = app.CreateToggle( "", colWidth);
    btnAnyOxygen7.SetOnTouch(CalcScoreR3);
    btnAnyOxygen7.SetTextSize( colTextSize );
    layHoriz3.AddChild( btnAnyOxygen7 );
    
    //Create a layout with objects horizontal centered.
    layHoriz4 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz4.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz4 );
    txt = app.CreateText( "<b>Temperature</b>",colTextWidth,0.045,"Html,Multiline");
    txt.SetTextSize( colTextSize );
    layHoriz4.AddChild( txt );
    
    btnTemperature1 = app.CreateToggle( ">=35.0", colWidth);
    btnTemperature1.SetOnTouch(CalcScoreR4);
    btnTemperature1.SetTextSize( colTextSize );
    layHoriz4.AddChild( btnTemperature1 );
    
    btnTemperature2 = app.CreateToggle( "", colWidth);
    btnTemperature2.SetOnTouch(CalcScoreR4);
    btnTemperature2.SetTextSize( colTextSize );
    layHoriz4.AddChild( btnTemperature2 );
    
    btnTemperature3 = app.CreateToggle( "35.1-36.0", colWidth);
    btnTemperature3.SetOnTouch(CalcScoreR4);
    btnTemperature3.SetTextSize( colTextSize );
    layHoriz4.AddChild( btnTemperature3 );
    
    btnTemperature4 = app.CreateToggle( "36.1-37.9", colWidth);
    btnTemperature4.SetOnTouch(CalcScoreR4);
    btnTemperature4.SetTextSize( colTextSize );
    layHoriz4.AddChild( btnTemperature4 );
    
    btnTemperature5 = app.CreateToggle( "38.0-39.0", colWidth);
    btnTemperature5.SetOnTouch(CalcScoreR4);
    btnTemperature5.SetTextSize( colTextSize );
    layHoriz4.AddChild( btnTemperature5 );
    
    btnTemperature6 = app.CreateToggle( ">=39.1", colWidth);
    btnTemperature6.SetOnTouch(CalcScoreR4);
    btnTemperature6.SetTextSize( colTextSize );
    layHoriz4.AddChild( btnTemperature6 );
    
    btnTemperature7 = app.CreateToggle( "", colWidth);
    btnTemperature7.SetOnTouch(CalcScoreR4);
    btnTemperature1.SetTextSize( colTextSize );
    layHoriz4.AddChild( btnTemperature7 );
    
    //Create a layout with objects horizontal centered.
    layHoriz5 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz5.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz5 );
    txt = app.CreateText( "<b>Systolic BP</b>",colTextWidth,0.045,"Html,Multiline");
    txt.SetTextSize( colTextSize );
    layHoriz5.AddChild( txt );
    
    btnSystolicBP1 = app.CreateToggle( ">=90", colWidth);
    btnSystolicBP1.SetOnTouch(CalcScoreR5);
    btnSystolicBP1.SetTextSize( colTextSize );
    layHoriz5.AddChild( btnSystolicBP1 );
    
    btnSystolicBP2 = app.CreateToggle( "90-100", colWidth);
    btnSystolicBP2.SetOnTouch(CalcScoreR5);
    btnSystolicBP2.SetTextSize( colTextSize );
    layHoriz5.AddChild( btnSystolicBP2 );
    
    btnSystolicBP3 = app.CreateToggle( "101-110", colWidth);
    btnSystolicBP3.SetOnTouch(CalcScoreR5);
    btnSystolicBP3.SetTextSize( colTextSize );
    layHoriz5.AddChild( btnSystolicBP3 );
    
    btnSystolicBP4 = app.CreateToggle( "111-159", colWidth);
    btnSystolicBP4.SetOnTouch(CalcScoreR5);
    btnSystolicBP4.SetTextSize( colTextSize );
    layHoriz5.AddChild( btnSystolicBP4 );
    
    btnSystolicBP5 = app.CreateToggle( "160-179", colWidth);
    btnSystolicBP5.SetOnTouch(CalcScoreR5);
    btnSystolicBP5.SetTextSize( colTextSize );
    layHoriz5.AddChild( btnSystolicBP5 );
    
    btnSystolicBP6 = app.CreateToggle( "180-219", colWidth);
    btnSystolicBP6.SetOnTouch(CalcScoreR5);
    btnSystolicBP6.SetTextSize( colTextSize );
    layHoriz5.AddChild( btnSystolicBP6 );
    
    btnSystolicBP7 = app.CreateToggle( ">=220", colWidth);
    btnSystolicBP7.SetOnTouch(CalcScoreR5);
    btnSystolicBP7.SetTextSize( colTextSize );
    layHoriz5.AddChild( btnSystolicBP7 );
    
        //Create a layout with objects horizontal centered.
    layHoriz6 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz6.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz6 );
    txt = app.CreateText( "<b>Heart Rate</b>",colTextWidth,0.045,"Html,Multiline");
    txt.SetTextSize( colTextSize );
    layHoriz6.AddChild( txt );
    
    btnHeartRate1 = app.CreateToggle( "<40.0", colWidth);
    btnHeartRate1.SetOnTouch(CalcScoreR6);
    btnHeartRate1.SetTextSize( colTextSize );
    layHoriz6.AddChild( btnHeartRate1 );
    
    btnHeartRate2 = app.CreateToggle( "", colWidth);
    btnHeartRate2.SetOnTouch(CalcScoreR6);
    btnHeartRate2.SetTextSize( colTextSize );
    layHoriz6.AddChild( btnHeartRate2 );
    
    btnHeartRate3 = app.CreateToggle( "41-59", colWidth);
    btnHeartRate3.SetOnTouch(CalcScoreR6);
    btnHeartRate3.SetTextSize( colTextSize );
    layHoriz6.AddChild( btnHeartRate3 );
    
    btnHeartRate4 = app.CreateToggle( "60-90", colWidth);
    btnHeartRate4.SetOnTouch(CalcScoreR6);
    btnHeartRate4.SetTextSize( colTextSize );
    layHoriz6.AddChild( btnHeartRate4 );
    
    btnHeartRate5 = app.CreateToggle( "91-110", colWidth);
    btnHeartRate5.SetOnTouch(CalcScoreR6);
    btnHeartRate5.SetTextSize( colTextSize );
    layHoriz6.AddChild( btnHeartRate5 );
    
    btnHeartRate6 = app.CreateToggle( "111-130", colWidth);
    btnHeartRate6.SetOnTouch(CalcScoreR6);
    btnHeartRate6.SetTextSize( colTextSize );
    layHoriz6.AddChild( btnHeartRate6 );
    
    btnHeartRate7 = app.CreateToggle( ">=131", colWidth);
    btnHeartRate7.SetOnTouch(CalcScoreR6);
    btnHeartRate7.SetTextSize( colTextSize );
    layHoriz6.AddChild( btnHeartRate7 );
    
    //Create a layout with objects horizontal centered.
    layHoriz7 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz7.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz7 );
    txt = app.CreateText( "<b>Level of Consciousness</b>",colTextWidth,0.045,"Html,Multiline");
    txt.SetTextSize( colTextSize );
    layHoriz7.AddChild( txt );
    
    btnLevelofCons1 = app.CreateToggle( "", colWidth);
    btnLevelofCons1.SetOnTouch(CalcScoreR7);
    btnLevelofCons1.SetTextSize( colTextSize );
    layHoriz7.AddChild( btnLevelofCons1 );
    
    btnLevelofCons2 = app.CreateToggle( "", colWidth);
    btnLevelofCons2.SetOnTouch(CalcScoreR7);
    btnLevelofCons2.SetTextSize( colTextSize );
    layHoriz7.AddChild( btnLevelofCons2 );
    
    btnLevelofCons3 = app.CreateToggle( "", colWidth);
    btnLevelofCons3.SetOnTouch(CalcScoreR7);
    btnLevelofCons3.SetTextSize( colTextSize );
    layHoriz7.AddChild( btnLevelofCons3 );
    
    btnLevelofCons4 = app.CreateToggle( "A", colWidth);
    btnLevelofCons4.SetOnTouch(CalcScoreR7);
    btnLevelofCons4.SetTextSize( colTextSize );
    layHoriz7.AddChild( btnLevelofCons4 );
    
    btnLevelofCons5 = app.CreateToggle( "", colWidth);
    btnLevelofCons5.SetOnTouch(CalcScoreR7);
    btnLevelofCons5.SetTextSize( colTextSize );
    layHoriz7.AddChild( btnLevelofCons5 );
    
    btnLevelofCons6 = app.CreateToggle( "", colWidth);
    btnLevelofCons6.SetOnTouch(CalcScoreR7);
    btnLevelofCons6.SetTextSize( colTextSize );
    layHoriz7.AddChild( btnLevelofCons6 );
    
    btnLevelofCons7 = app.CreateToggle( "V,P,U", colWidth);
    btnLevelofCons7.SetOnTouch(CalcScoreR7);
    btnLevelofCons7.SetTextSize( colTextSize );
    layHoriz7.AddChild( btnLevelofCons7 );
    
    //Create a text label and add it to footer layout.
    layHoriz = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz.SetBackColor("#ff000080");
    //layVert.AddChild( layHoriz );
    txt = app.CreateText( "แนวทางการเฝ้าระวังเมื่อผู้ป่วยมีอาการเปลี่ยนแปลง" );
    txt.SetTextSize( 20 );
    layHoriz.AddChild( txt );
    //Create a text label and add it to footer layout.
    layHoriz = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz );
    
    txt = app.CreateText( "TEWS score",.2,.03,"Multiline");
    txt.SetTextSize( 12 );
    layHoriz.AddChild( txt );
    
    txt = app.CreateText( "Frequency of monitoring",.3,.03,"Multiline");
    txt.SetTextSize( 12 );
    layHoriz.AddChild( txt );
    
    txt = app.CreateText( "Clinical response",.4,.03,"Multiline");
    txt.SetTextSize( 12 );
    layHoriz.AddChild( txt );
    
    //TEWS score0 footer
    layHorizScore0 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHorizScore0.SetBackColor("#ff000080");
    layVert.AddChild( layHorizScore0 );
    
    txt = app.CreateText( "Score : 0",.2,.05,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextSize( 12 );
    txt.SetTextColor( colorText );
    txt.SetBackColor(colorScore0);
    layHorizScore0.AddChild( txt );
    
    txt = app.CreateText( "วัด vital signs ทุก 8 ชั่วโมง",.3,.05,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextSize( 12 );
    txt.SetTextColor( colorText );
    txt.SetBackColor(colorScore0);
    layHorizScore0.AddChild( txt );
    
    txt = app.CreateText( "มอบหมายงานให้ PN/NAวัด V/S เวรละครั้ง",.4,.05,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextSize( 12 );
    txt.SetTextColor( colorText );
    txt.SetBackColor(colorScore0);
    layHorizScore0.AddChild( txt );
    
    //TEWS score1 footer
    layHorizScore1 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHorizScore1.SetBackColor("#ff000080");
    layVert.AddChild( layHorizScore1 );
    
    txt = app.CreateText( "Score : 1 - 4\nLow risk",.2,.16,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextSize( 12 );
    txt.SetTextColor( colorText );
    txt.SetBackColor(colorScore1);
    layHorizScore1.AddChild( txt );
    
    txt = app.CreateText( "วัด vital signs ทุก 4-6 ชั่วโมง",.3,.16,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextSize( 12 );
    txt.SetTextColor( colorText );
    txt.SetBackColor(colorScore1);
    layHorizScore1.AddChild( txt );
    
    txt = app.CreateText( "วัด vital signs ทุก 4-6 ชั่วโมง PN/NA แจ้งพยาบาลมาประเมินอาการผู้ป่วย พยาบาลประเมินซ้ำ วางแผนการดูแลผู้ป่วย มอบหมายงานให้ NA วัด VS ทุก 4-6 ช.ม.",.4,.16,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextSize( 12 );
    txt.SetTextColor( colorText );
    txt.SetBackColor(colorScore1);
    layHorizScore1.AddChild( txt );
    
    //TEWS score2 footer
    layHorizScore2 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHorizScore2.SetBackColor("#ff000080");
    layVert.AddChild( layHorizScore2 );
    
    txt = app.CreateText( "Score : 5 - 6 \n Medium risk",.2,.16,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextColor( colorText );
    txt.SetTextSize( 12 );
    txt.SetBackColor(colorScore2);
    layHorizScore2.AddChild( txt );
    
    txt = app.CreateText( "วัด vital signs ทุก 1 ชั่วโมง",.3,.16,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextColor( colorText );
    txt.SetTextSize( 12 );
    txt.SetBackColor(colorScore2);
    layHorizScore2.AddChild( txt );
    
    txt = app.CreateText( "- PN/NA แจ้งพยาบาล ให้ประเมินอาการภายใน 10 นาที และรายงานแพทย์ให้ทราบ\n- แพทย์ร่วมประเมินอาการผู้ป่วย ภายใน 30 นาที\n- ถ้าจำเป็นอาจต้องย้ายลง ICU เพื่อ Monitor",.4,.16,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextColor( colorText );
    txt.SetTextSize( 12 );
    txt.SetBackColor(colorScore2);
    layHorizScore2.AddChild( txt );
    
    //TEWS score3 footer
    layHorizScore3 = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHorizScore3.SetBackColor("#ff000080");
    layVert.AddChild( layHorizScore3 );
    
    txt = app.CreateText( "Score : >= 7\nOr 3 in 1 parameter\nHigh risk",.2,.16,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextColor( colorText );
    txt.SetTextSize( 12 );
    txt.SetBackColor(colorScore3);
    layHorizScore3.AddChild( txt );
    
    txt = app.CreateText( "วัด vital sings ทุก 15 นาที",.3,.16,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextColor( colorText );
    txt.SetTextSize( 12 );
    txt.SetBackColor(colorScore3);
    layHorizScore3.AddChild( txt );
    
    txt = app.CreateText( "- PN/NA แจ้งพยาบาลทราบทันที RN แจ้งแพทย์ทราบทันที\n- แพทย์มาประเมินผู้ป่วยภายใน 15 นาที\n- พิจารณาย้ายผู้ป่วยลง ICU เพื่อจัดการภาวะวิกฤต",.4,.16,"Multiline");
    txt.SetMargins(cM,cM,cM,cM);
    txt.SetTextColor( colorText );
    txt.SetTextSize( 12 );
    txt.SetBackColor(colorScore3);
    layHorizScore3.AddChild( txt );
    
    //ปุ่มเริ่มเอกสารใหม่
    layHoriz = app.CreateLayout( "Linear", "Horizontal,FillX" );
    layHoriz.SetBackColor("#ff000080");
    layVert.AddChild( layHoriz );
    btnReset = app.CreateButton( "Reset TEWS score",-1,-1,"FillX,Gray");
    btnReset.SetOnTouch(ResetScore);
    layHoriz.AddChild( btnReset );
    
    //ซ่อนปุ่มที่ไม่ได้ใช้งาน
    btnRespRate2.SetVisibility("Hide");
    btnOxygen5.SetVisibility("Hide");
    btnOxygen6.SetVisibility("Hide");
    btnOxygen7.SetVisibility("Hide");
    btnAnyOxygen1.SetVisibility("Hide");
    btnAnyOxygen3.SetVisibility("Hide");
    btnAnyOxygen5.SetVisibility("Hide");
    btnAnyOxygen6.SetVisibility("Hide");
    btnAnyOxygen7.SetVisibility("Hide");
    btnTemperature2.SetVisibility("Hide");
    btnTemperature7.SetVisibility("Hide");
    btnHeartRate2.SetVisibility("Hide");
    btnLevelofCons1.SetVisibility("Hide");
    btnLevelofCons2.SetVisibility("Hide");
    btnLevelofCons3.SetVisibility("Hide");
    btnLevelofCons5.SetVisibility("Hide");
    btnLevelofCons6.SetVisibility("Hide");
    //Add layout to app.    
    app.AddLayout( lay );
    
    //Initially scroll to center of image.
    //scroll.ScrollTo( 0.5, 0.5 );
}

function CalcScoreR1(isChecked)
{
    if(!row1IsChecked){
        if(btnRespRate1.GetChecked()){
            layHoriz1.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnRespRate1.SetVisibility("Hide");
        }
        if(btnRespRate2.GetChecked()){
            layHoriz1.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnRespRate2.SetVisibility("Hide");
        }
        
        if(btnRespRate3.GetChecked()){
            layHoriz1.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnRespRate3.SetVisibility("Hide");
        }
    
        if(btnRespRate4.GetChecked()){
            layHoriz1.SetBackColor(colorScore0);
            numScore = 0;
        }else{
            btnRespRate4.SetVisibility("Hide");
        }
    
        if(btnRespRate5.GetChecked()){
            layHoriz1.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnRespRate5.SetVisibility("Hide");
        }
    
        if(btnRespRate6.GetChecked()){
            layHoriz1.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnRespRate6.SetVisibility("Hide");
        }
    
        if(btnRespRate7.GetChecked()){
            layHoriz1.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnRespRate7.SetVisibility("Hide");
        }
        
        tewsScore = tewsScore + numScore;
        row1IsChecked = true;
        //app.ShowPopup("Respiration Rate score : " + numScore , "Short" );
    }else{
        app.ShowPopup("Respiration Rate score = " + numScore + "แล้ว!");
    }
    ChkTewsScore();
}

function CalcScoreR2(isChecked)
{
    if(!row2IsChecked){
        if(btnOxygen1.GetChecked()){
            layHoriz2.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnOxygen1.SetVisibility("Hide");
        }
        if(btnOxygen2.GetChecked()){
            layHoriz2.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnOxygen2.SetVisibility("Hide");
        }
        
        if(btnOxygen3.GetChecked()){
            layHoriz2.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnOxygen3.SetVisibility("Hide");
        }
    
        if(btnOxygen4.GetChecked()){
            layHoriz2.SetBackColor(colorScore0);
            numScore = 0;
        }else{
            btnOxygen4.SetVisibility("Hide");
        }
    
        if(btnOxygen5.GetChecked()){
            layHoriz2.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnOxygen5.SetVisibility("Hide");
        }
    
        if(btnOxygen6.GetChecked()){
            layHoriz2.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnOxygen6.SetVisibility("Hide");
        }
    
        if(btnOxygen7.GetChecked()){
            layHoriz2.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnOxygen7.SetVisibility("Hide");
        }
        tewsScore = tewsScore + numScore;
        row2IsChecked = true;
        //app.ShowPopup("Oxygen Satureations score : " + numScore , "Short" );
    }else{
        app.ShowPopup("Oxygen Satureations score = " + numScore + "แล้ว!");
    }
    ChkTewsScore();
}

function CalcScoreR3(isChecked)
{
    if(!row3IsChecked){
        if(btnAnyOxygen1.GetChecked()){
            layHoriz3.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnAnyOxygen1.SetVisibility("Hide");
        }
        if(btnAnyOxygen2.GetChecked()){
            layHoriz3.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnAnyOxygen2.SetVisibility("Hide");
        }
        
        if(btnAnyOxygen3.GetChecked()){
            layHoriz3.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnAnyOxygen3.SetVisibility("Hide");
        }
    
        if(btnAnyOxygen4.GetChecked()){
            layHoriz3.SetBackColor(colorScore0);
            numScore = 0;
        }else{
            btnAnyOxygen4.SetVisibility("Hide");
        }
    
        if(btnAnyOxygen5.GetChecked()){
            layHoriz3.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnAnyOxygen5.SetVisibility("Hide");
        }
    
        if(btnAnyOxygen6.GetChecked()){
            layHoriz3.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnAnyOxygen6.SetVisibility("Hide");
        }
    
        if(btnAnyOxygen7.GetChecked()){
            layHoriz3.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnAnyOxygen7.SetVisibility("Hide");
        }
        tewsScore = tewsScore + numScore;
        row3IsChecked = true;
        //app.ShowPopup("Oxygen Satureations score : " + numScore , "Short" );
    }else{
        app.ShowPopup("Oxygen Satureations score = " + numScore + "แล้ว!");
    }
    ChkTewsScore();
}

function CalcScoreR4(isChecked)
{
    if(!row4IsChecked){
        if(btnTemperature1.GetChecked()){
            layHoriz4.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnTemperature1.SetVisibility("Hide");
        }
        if(btnTemperature2.GetChecked()){
            layHoriz4.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnTemperature2.SetVisibility("Hide");
        }
        
        if(btnTemperature3.GetChecked()){
            layHoriz4.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnTemperature3.SetVisibility("Hide");
        }
    
        if(btnTemperature4.GetChecked()){
            layHoriz4.SetBackColor(colorScore0);
            numScore = 0;
        }else{
            btnTemperature4.SetVisibility("Hide");
        }
    
        if(btnTemperature5.GetChecked()){
            layHoriz4.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnTemperature5.SetVisibility("Hide");
        }
    
        if(btnTemperature6.GetChecked()){
            layHoriz4.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnTemperature6.SetVisibility("Hide");
        }
    
        if(btnTemperature7.GetChecked()){
            layHoriz4.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnTemperature7.SetVisibility("Hide");
        }
        tewsScore = tewsScore + numScore;
        row4IsChecked = true;
        //app.ShowPopup("Temperature score : " + numScore , "Short" );
    }else{
        app.ShowPopup("Temperature score = " + numScore + "แล้ว!");
    }
    ChkTewsScore();
}

function CalcScoreR5(isChecked)
{
    if(!row5IsChecked){
        if(btnSystolicBP1.GetChecked()){
            layHoriz5.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnSystolicBP1.SetVisibility("Hide");
        }
        if(btnSystolicBP2.GetChecked()){
            layHoriz5.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnSystolicBP2.SetVisibility("Hide");
        }
        
        if(btnSystolicBP3.GetChecked()){
            layHoriz5.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnSystolicBP3.SetVisibility("Hide");
        }
    
        if(btnSystolicBP4.GetChecked()){
            layHoriz5.SetBackColor(colorScore0);
            numScore = 0;
        }else{
            btnSystolicBP4.SetVisibility("Hide");
        }
    
        if(btnSystolicBP5.GetChecked()){
            layHoriz5.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnSystolicBP5.SetVisibility("Hide");
        }
    
        if(btnSystolicBP6.GetChecked()){
            layHoriz5.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnSystolicBP6.SetVisibility("Hide");
        }
    
        if(btnSystolicBP7.GetChecked()){
            layHoriz5.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnSystolicBP7.SetVisibility("Hide");
        }
        tewsScore = tewsScore + numScore;
        row5IsChecked = true;
        //app.ShowPopup("Systolic BP score : " + numScore , "Short" );
    }else{
        app.ShowPopup("Systolic BP score = " + numScore + "แล้ว!");
    }
    ChkTewsScore();
}

function CalcScoreR6(isChecked)
{
    if(!row6IsChecked){
        if(btnHeartRate1.GetChecked()){
            layHoriz6.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnHeartRate1.SetVisibility("Hide");
        }
        if(btnHeartRate2.GetChecked()){
            layHoriz6.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnHeartRate2.SetVisibility("Hide");
        }
        
        if(btnHeartRate3.GetChecked()){
            layHoriz6.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnHeartRate3.SetVisibility("Hide");
        }
    
        if(btnHeartRate4.GetChecked()){
            layHoriz6.SetBackColor(colorScore0);
            numScore = 0;
        }else{
            btnHeartRate4.SetVisibility("Hide");
        }
    
        if(btnHeartRate5.GetChecked()){
            layHoriz6.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnHeartRate5.SetVisibility("Hide");
        }
    
        if(btnHeartRate6.GetChecked()){
            layHoriz6.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnHeartRate6.SetVisibility("Hide");
        }
    
        if(btnHeartRate7.GetChecked()){
            layHoriz6.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnHeartRate7.SetVisibility("Hide");
        }
        tewsScore = tewsScore + numScore;
        row6IsChecked = true;
        //app.ShowPopup("Systolic BP score : " + numScore , "Short" );
    }else{
        app.ShowPopup("Systolic BP score = " + numScore + "แล้ว!");
    }
    ChkTewsScore();
}

function CalcScoreR7(isChecked)
{
    if(!row7IsChecked){
        if(btnLevelofCons1.GetChecked()){
            layHoriz7.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnLevelofCons1.SetVisibility("Hide");
        }
        if(btnLevelofCons2.GetChecked()){
            layHoriz7.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnLevelofCons2.SetVisibility("Hide");
        }
        
        if(btnLevelofCons3.GetChecked()){
            layHoriz7.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnLevelofCons3.SetVisibility("Hide");
        }
    
        if(btnLevelofCons4.GetChecked()){
            layHoriz7.SetBackColor(colorScore0);
            numScore = 0;
        }else{
            btnLevelofCons4.SetVisibility("Hide");
        }
    
        if(btnLevelofCons5.GetChecked()){
            layHoriz7.SetBackColor(colorScore1);
            numScore = 1;
        }else{
            btnLevelofCons5.SetVisibility("Hide");
        }
    
        if(btnLevelofCons6.GetChecked()){
            layHoriz7.SetBackColor(colorScore2);
            numScore = 2;
        }else{
            btnLevelofCons6.SetVisibility("Hide");
        }
    
        if(btnLevelofCons7.GetChecked()){
            layHoriz7.SetBackColor(colorScore3);
            numScore = 3;
            hiRisk = true;
        }else{
            btnLevelofCons7.SetVisibility("Hide");
        }
        tewsScore = tewsScore + numScore;
        row7IsChecked = true;
        //app.ShowPopup("Level of Consciousness : " + numScore , "Short" );
    }else{
        app.ShowPopup("Level of Consciousness = " + numScore + "แล้ว!");
    }
    ChkTewsScore();
}

function ChkTewsScore()
{
    txtHeader.SetText( "TEWS1 score : " + tewsScore );
    if(hiRisk || numScore >= 7){
        layHorizScore0.SetVisibility("Gone");
        layHorizScore1.SetVisibility("Gone");
        layHorizScore2.SetVisibility("Gone");
    }else{
        if(row1IsChecked && row2IsChecked && row3IsChecked && row4IsChecked && row5IsChecked && row6IsChecked && row7IsChecked){
            
            layHorizScore0.SetVisibility("Gone");
            layHorizScore1.SetVisibility("Gone");
            layHorizScore2.SetVisibility("Gone");
            layHorizScore3.SetVisibility("Gone");
            
            if(tewsScore > 6){  
                layHorizScore3.SetVisibility("Show");
            }else if(tewsScore > 4){  
                layHorizScore2.SetVisibility("Show");
            }else if(tewsScore > 0){  
                layHorizScore1.SetVisibility("Show");
            }else{
                layHorizScore0.SetVisibility("Show");
            }
            
        }else{
            app.ShowPopup("TEWS score : " + tewsScore , "Short" );
        }
    }
}

function ResetScore()
{
    app.Exit();
}
