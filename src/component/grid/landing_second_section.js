import React, { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap'
import './index.css'
import Six_by_six from './Six_by_six'
import side_image from '../../assets/img/Frame 68.png'
import side_image_2 from '../../assets/img/Frame 65.png'
import side_image_3 from '../../assets/img/Frame 67.png'
import group_img from '../../assets/img/Group 23.png'
import { FaCheck } from "react-icons/fa";






const Landing_second_section = () => {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(innerWidth);
  return (
    <Stack>
      <Stack className='our-titel'>
        Our Process Work Flow

      </Stack>
      <Stack className='our-titel-para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book


      </Stack>
      <Stack className='back_img_sec2'>
        <Six_by_six
        // main_style={{marginTop:'9em'}}
          first_section={<Stack>
            <Stack className='sec2-titel' mt={1}>Step1</Stack>
            <Stack className='sec2_titel_heading'>Choose The Time Slot As Per Your Suitablity</Stack>
            <Stack className='sec2_titel_sub_data' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Stack>
          </Stack>}
          second_section={
            <img width={'100%'} src={side_image} alt='' />
          }


        />
        {
          innerWidth < 900 ? <Six_by_six

            first_section={
              <Stack>
                <Stack className='sec2-titel'>Step2</Stack>
                <Stack className='sec2_titel_heading'>Choose The Time Slot As Per Your Suitablity</Stack>
                <Stack className='sec2_titel_sub_data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Stack>
              </Stack>
            }
            second_section={
              <img width={'100%'} src={side_image} alt='' />

            }
          /> : <Six_by_six

            first_section={<img width={'100%'} src={side_image} alt='' />}
            second_section={
              <Stack>
                <Stack className='sec2-titel'>Step2</Stack>
                <Stack className='sec2_titel_heading'>Choose The Time Slot As Per Your Suitablity</Stack>
                <Stack className='sec2_titel_sub_data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Stack>
              </Stack>
            }
          />
        }

        <Six_by_six
          first_section={<Stack>
            <Stack className='sec2-titel' mt={1}>Step3</Stack>
            <Stack className='sec2_titel_heading'>Pick the Vendor As Per Your Choice</Stack>
            <Stack className='sec2_titel_sub_data' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Stack>
          </Stack>}

          second_section={
            <Stack style={{ flexDirection: 'row', alignItems: 'center' }}  >
              <Stack>
                <img width={'100%'} src={side_image_2} alt='' />
              </Stack>
              <Stack>
                <img width={'100%'} src={side_image_2} alt='' />
              </Stack>
              <Stack>
                <img width={'100%'} src={side_image_2} alt='' />
              </Stack>
            </Stack>

          }


        />
        {
          innerWidth < 900 ? <Six_by_six
            first_section={
              <Stack>
                <Stack className='sec2-titel'>Step4</Stack>
                <Stack className='sec2_titel_heading'>Pick The Offer Or Get the Expert Advise</Stack>
                <Stack className='sec2_titel_sub_data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Stack>
              </Stack>
            }
            second_section={
              <img width={'100%'} src={side_image_3} alt='' />

            }
          /> : <Six_by_six
            first_section={<img width={'100%'} src={side_image_3} alt='' />}
            second_section={
              <Stack>
                <Stack className='sec2-titel'>Step4</Stack>
                <Stack className='sec2_titel_heading'>Pick The Offer Or Get the Expert Advise</Stack>
                <Stack className='sec2_titel_sub_data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Stack>
              </Stack>
            }
          />
        }

      </Stack>
      <Stack className='last_back_img'>
        <Six_by_six
          first_section={
            <img width={'100%'} src={group_img} alt='' />

          }
          second_section={
            <Stack>
              <Stack className='lat_sec_heafing'>
                Advanced Solution and Professional Talent
              </Stack>
              <Stack className='lat_sec_para'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </Stack>
              <Stack style={{ flexDirection: 'row', alignItems: 'center', mt: 2 }}>
                <Stack>
                  <FaCheck className='lat_sec_points' color='white' size={20} />
                </Stack>
                <Stack className='lat_sec_points'>Choose Your expert where an expert will evaluate all of your different quotes</Stack>
              </Stack>
              <Stack style={{ flexDirection: 'row', alignItems: 'center', mt: 2 }}>
                <Stack>
                  <FaCheck className='lat_sec_points' color='white' size={20} />
                </Stack>
                <Stack className='lat_sec_points'>Choose Your expert where an expert will evaluate all of your different quotes</Stack>
              </Stack>
              <Stack style={{ flexDirection: 'row', alignItems: 'center', mt: 2 }}>
                <Stack>
                  <FaCheck className='lat_sec_points' color='white' size={20} />
                </Stack>
                <Stack className='lat_sec_points'>Choose Your expert where an expert will evaluate all of your different quotes</Stack>
              </Stack>
            </Stack>
          }


        />
      </Stack>
    </Stack>
  )
}

export default Landing_second_section