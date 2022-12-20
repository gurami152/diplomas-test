<template>
  <div id="app">
    <button @click="print"></button>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <div id="to_print">
      <div class="a4_page" style="padding: 5mm;">
        <div class="main_block">
          <div class="title_duplicate" style="display: none;"><b>Дублікат / Duplicate</b></div>
          <div class="data_left_block" style="left: 15mm; top: 5mm; width: 87mm;">
            <!--                <div class="data_left_top_block">-->


            <div class="title_diploma title_diploma_left" data-type-diploma="ДИПЛОМ МАГІСТРА" data-honours="0" style="color: red; font-size: 38px; left: -1mm; top: 20mm; width: 82mm;">ДИПЛОМ МАГІСТРА</div>
            <p class="number_left" style="font-size: 15pt; margin-left: -1mm; margin-top: 45mm; width: 82mm;">
              M21 № 016154                </p>
            <div class="name_left_block" style="margin-top: 10mm; margin-left: -1mm; width: 82mm;">
              <p class="name_left" style="font-size: 18pt;">
                Анастасія Устименко                    </p>
              <span class="br_student_row"><br style="display: block; margin-bottom: 18px;"></span>
              <!--            <p class="surname">-->
              <!--              -->                    <!--            </p>-->
            </div>
            <div class="year_university_block_left" style="font-size: 18.7px;">
              <p class="year_left" style="margin-left: -1mm; margin-top: 0mm; width: 82mm;">
                          <span class="year_newleft" style="text-align: center; display: block;">
                              закінчила у 2020 році <span class="br_one_row"><br style="display: block; margin-bottom: 15px;"></span>                        </span>
                <!--                    </p>-->
                <!--                    <p class="univer_left">-->
                <span class="univer_newleft simple" style="margin-left: 0mm; height: 162px; text-align: center; padding-bottom: 18px;">
                          Запорізький національний університет
                          <br><span class="br_qualification"><br></span>                    </span>
              </p>


              <!--                -->                    <!--                <p class="university_text_left">-->
              <!--                    -->                    <!--                </p>-->
              <!--                    </div>-->
            </div>
            <div class="info_left_block info_block_font_size" style="font-size: 20px; margin-left: 1mm; margin-top: 0mm; width: 85mm;">
              <!--            <p class="year_left">-->
              <!--              -->                    <!--            </p>-->
              <div class="university_left" style="line-height: 120%;">
                <!--                        <span>акредитована</span>-->
                <div class="block"><div>Освітня програма</div><div class="study-program-name" style="height: 48px;"><b>Публічне управління та адміністрування</b></div></div><div class="block"><div>здобула  кваліфікацію:</div></div> <div class="block"> ступінь вищої освіти <b><i>магістр</i></b></div><div class="block"><div>галузь знань </div><div class="inductry-name-value" style="height: 48px;"><b>Публічне управління та адміністрування</b></div></div><div class="block"><div>спеціальність</div><div class="specialty-name-block" style="height: 48px;"><b>«Публічне управління та адміністрування»</b></div></div><div class="block"><div>професійна кваліфікація</div><div class="qualification-name-value" style="height: 72px;"><b>професіонал у сфері публічного управління, державної служби та місцевого самоврядування
              </b></div></div><div class="block"><div>Додаткова інформація&nbsp;</div><div class="additional-info-value"><b>Диплом з відзнакою</b></div></div>                    </div>
            </div>
            <div class="rector_left_block rector_date_block_font_size" style="font-size: 19px; left: 34mm; bottom: -5mm; width: 50mm;">
                      <span class="rector_left_word">
                        Ректор <div style="padding-bottom: 3px;"></div> Rector                    </span>
            </div>
            <!--                <div class="note_bottom_left_block note_block_font_size">-->
            <!--                    --><!--                </div>-->
          </div>

          <div class="data_right_block" style="right: 15mm; top: 5mm; width: 87mm;">
            <div class="title_diploma title_diploma_right" data-type-diploma="MASTER'S DIPLOMA" data-honours="0" style="color: red; font-size: 38px; left: 1mm; top: 20mm; width: 82mm;">MASTER'S DIPLOMA</div>
            <p class="number_right" style="font-size: 15pt; margin-left: 1mm; margin-top: 45mm; width: 82mm;">
              M21 № 016154                </p>
            <div class="name_right_block" style="margin-top: 10mm; margin-left: 1mm; width: 82mm;">
              <p class="name_right" style="font-size: 18pt;">
                Anastasiia Ustymenko                    </p>
              <span class="br_student_row"><br style="display: block; margin-bottom: 18px;"></span>
              <!--            <p class="surname">-->
              <!--              -->                    <!--            </p>-->
            </div>
            <div class="year_university_block_right" style="font-size: 18.7px;">
              <p class="year_right" style="margin-left: 1mm; margin-top: 0mm; width: 82mm;">
                      <span class="year_newright" style="display: block; text-align: center;">
                          in 2020 completed the full course of<span class="br_one_row_right"><br style="display: block; margin-bottom: 15px;"></span>                    </span>
                <span class="univer_newright simple" style="margin-left: 0mm; height: 162px; padding-bottom: 18px; display: flex; text-align: center;">
                          Zaporizhzhia National University                        <br><span class="br_qualification"><br></span>                    </span>
              </p>
              <!--                -->                    <!--                <p class="university_text_left">-->
              <!--                    -->                    <!--                </p>-->
            </div>
            <div class="info_right_block info_block_font_size" style="font-size: 20px; margin-left: 2mm; margin-top: 0mm; width: 85mm;">
              <!--            <p class="year_left">-->
              <!--              -->                    <!--            </p>-->
              <div class="university_right" style="line-height: 120%;">
                <div class="block"><div>Educational Programme</div><div class="study-program-name" style="height: 48px;"><b>Public Administration</b></div></div><div class="block" style="margin-top: 10px;"><div>obtained qualification:</div></div><div class="block"><b><i>Master's</i></b> Degree </div><div class="block"><div>Field of Study </div><div class="inductry-name-value" style="height: 48px;"><b>Public administration</b></div></div><div class="block"><div>Programme Subject Area</div>  <div class="specialty-name-block" style="height: 48px;"><b>«Public Administration»</b></div></div><div class="block"><div>Professional Qualification</div><div class="qualification-name-value" style="height: 72px;"><b>Professional in the Field of Public Administration and Local Governance
              </b></div></div><div class="block"><div>Additional information&nbsp;</div><div class="additional-info-value"><b>Diploma with honours</b></div></div>                    </div>
            </div>
            <!--          <div class="info_right_block info_block_font_size">-->
            <!--            <p class="year_right">-->
            <!--              -->                <!--            </p>-->
            <!--            <p class="university_right">-->
            <!--              -->                <!--            </p>-->
            <!--          </div>-->
            <div class="rector_right_block rector_date_block_font_size" style="font-size: 19px; left: 25mm; bottom: -5mm; width: 50mm;">
              <span class="rector_right_name">
                Микола Фролов <div style="padding-bottom: 3px;"></div> Mykola Frolov            </span>
            </div>
            <div class="date_right_block rector_date_block_font_size" style="font-size: 19px; left: 25mm; bottom: -13mm;">
              <span class="date_right">
                "17" лютого / February 2021            </span>
            </div>
            <!--                <div class="note_bottom_right_block note_block_font_size">-->
            <!--                    --><!--                </div>-->
          </div>
        </div>
      </div>
      <div class="a4_page" style="padding: 5mm;">
        <div class="main_block">
          <div class="title_duplicate" style="display: none;"><b>Дублікат / Duplicate</b></div>
          <div class="data_left_block" style="left: 15mm; top: 5mm; width: 87mm;">
            <!--                <div class="data_left_top_block">-->


            <div class="title_diploma title_diploma_left" data-type-diploma="ДИПЛОМ МАГІСТРА" data-honours="0" style="color: red; font-size: 38px; left: -1mm; top: 20mm; width: 82mm;">ДИПЛОМ МАГІСТРА</div>
            <p class="number_left" style="font-size: 15pt; margin-left: -1mm; margin-top: 45mm; width: 82mm;">
              M21 № 016154                </p>
            <div class="name_left_block" style="margin-top: 10mm; margin-left: -1mm; width: 82mm;">
              <p class="name_left" style="font-size: 18pt;">
                Анастасія Устименко                    </p>
              <span class="br_student_row"><br style="display: block; margin-bottom: 18px;"></span>
              <!--            <p class="surname">-->
              <!--              -->                    <!--            </p>-->
            </div>
            <div class="year_university_block_left" style="font-size: 18.7px;">
              <p class="year_left" style="margin-left: -1mm; margin-top: 0mm; width: 82mm;">
                          <span class="year_newleft" style="text-align: center; display: block;">
                              закінчила у 2020 році <span class="br_one_row"><br style="display: block; margin-bottom: 15px;"></span>                        </span>
                <!--                    </p>-->
                <!--                    <p class="univer_left">-->
                <span class="univer_newleft simple" style="margin-left: 0mm; height: 162px; text-align: center; padding-bottom: 18px;">
                          Запорізький національний університет
                          <br><span class="br_qualification"><br></span>                    </span>
              </p>


              <!--                -->                    <!--                <p class="university_text_left">-->
              <!--                    -->                    <!--                </p>-->
              <!--                    </div>-->
            </div>
            <div class="info_left_block info_block_font_size" style="font-size: 20px; margin-left: 1mm; margin-top: 0mm; width: 85mm;">
              <!--            <p class="year_left">-->
              <!--              -->                    <!--            </p>-->
              <div class="university_left" style="line-height: 120%;">
                <!--                        <span>акредитована</span>-->
                <div class="block"><div>Освітня програма</div><div class="study-program-name" style="height: 48px;"><b>Публічне управління та адміністрування</b></div></div><div class="block"><div>здобула  кваліфікацію:</div></div> <div class="block"> ступінь вищої освіти <b><i>магістр</i></b></div><div class="block"><div>галузь знань </div><div class="inductry-name-value" style="height: 48px;"><b>Публічне управління та адміністрування</b></div></div><div class="block"><div>спеціальність</div><div class="specialty-name-block" style="height: 48px;"><b>«Публічне управління та адміністрування»</b></div></div><div class="block"><div>професійна кваліфікація</div><div class="qualification-name-value" style="height: 72px;"><b>професіонал у сфері публічного управління, державної служби та місцевого самоврядування
              </b></div></div><div class="block"><div>Додаткова інформація&nbsp;</div><div class="additional-info-value"><b>Диплом з відзнакою</b></div></div>                    </div>
            </div>
            <div class="rector_left_block rector_date_block_font_size" style="font-size: 19px; left: 34mm; bottom: -5mm; width: 50mm;">
                      <span class="rector_left_word">
                        Ректор <div style="padding-bottom: 3px;"></div> Rector                    </span>
            </div>
            <!--                <div class="note_bottom_left_block note_block_font_size">-->
            <!--                    --><!--                </div>-->
          </div>

          <div class="data_right_block" style="right: 15mm; top: 5mm; width: 87mm;">
            <div class="title_diploma title_diploma_right" data-type-diploma="MASTER'S DIPLOMA" data-honours="0" style="color: red; font-size: 38px; left: 1mm; top: 20mm; width: 82mm;">MASTER'S DIPLOMA</div>
            <p class="number_right" style="font-size: 15pt; margin-left: 1mm; margin-top: 45mm; width: 82mm;">
              M21 № 016154                </p>
            <div class="name_right_block" style="margin-top: 10mm; margin-left: 1mm; width: 82mm;">
              <p class="name_right" style="font-size: 18pt;">
                Anastasiia Ustymenko                    </p>
              <span class="br_student_row"><br style="display: block; margin-bottom: 18px;"></span>
              <!--            <p class="surname">-->
              <!--              -->                    <!--            </p>-->
            </div>
            <div class="year_university_block_right" style="font-size: 18.7px;">
              <p class="year_right" style="margin-left: 1mm; margin-top: 0mm; width: 82mm;">
                      <span class="year_newright" style="display: block; text-align: center;">
                          in 2020 completed the full course of<span class="br_one_row_right"><br style="display: block; margin-bottom: 15px;"></span>                    </span>
                <span class="univer_newright simple" style="margin-left: 0mm; height: 162px; padding-bottom: 18px; display: flex; text-align: center;">
                          Zaporizhzhia National University                        <br><span class="br_qualification"><br></span>                    </span>
              </p>
              <!--                -->                    <!--                <p class="university_text_left">-->
              <!--                    -->                    <!--                </p>-->
            </div>
            <div class="info_right_block info_block_font_size" style="font-size: 20px; margin-left: 2mm; margin-top: 0mm; width: 85mm;">
              <!--            <p class="year_left">-->
              <!--              -->                    <!--            </p>-->
              <div class="university_right" style="line-height: 120%;">
                <div class="block"><div>Educational Programme</div><div class="study-program-name" style="height: 48px;"><b>Public Administration</b></div></div><div class="block" style="margin-top: 10px;"><div>obtained qualification:</div></div><div class="block"><b><i>Master's</i></b> Degree </div><div class="block"><div>Field of Study </div><div class="inductry-name-value" style="height: 48px;"><b>Public administration</b></div></div><div class="block"><div>Programme Subject Area</div>  <div class="specialty-name-block" style="height: 48px;"><b>«Public Administration»</b></div></div><div class="block"><div>Professional Qualification</div><div class="qualification-name-value" style="height: 72px;"><b>Professional in the Field of Public Administration and Local Governance
              </b></div></div><div class="block"><div>Additional information&nbsp;</div><div class="additional-info-value"><b>Diploma with honours</b></div></div>                    </div>
            </div>
            <!--          <div class="info_right_block info_block_font_size">-->
            <!--            <p class="year_right">-->
            <!--              -->                <!--            </p>-->
            <!--            <p class="university_right">-->
            <!--              -->                <!--            </p>-->
            <!--          </div>-->
            <div class="rector_right_block rector_date_block_font_size" style="font-size: 19px; left: 25mm; bottom: -5mm; width: 50mm;">
              <span class="rector_right_name">
                Микола Фролов <div style="padding-bottom: 3px;"></div> Mykola Frolov            </span>
            </div>
            <div class="date_right_block rector_date_block_font_size" style="font-size: 19px; left: 25mm; bottom: -13mm;">
              <span class="date_right">
                "17" лютого / February 2021            </span>
            </div>
            <!--                <div class="note_bottom_right_block note_block_font_size">-->
            <!--                    --><!--                </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async print(){
      await this.$htmlToPaper('to_print');
    }
  }
}
</script>
<style>
  @import '@/../public/styles/style.css';
</style>
<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
}


</style>
