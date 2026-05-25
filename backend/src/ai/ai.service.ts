import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AiService {

  async getForecast() {

    const response = await axios.post(
      'http://localhost:8000/predict'
    );

    return response.data;
  }

}