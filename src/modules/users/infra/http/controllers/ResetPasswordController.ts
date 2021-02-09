import { Request, Response } from 'express';
import ResetPasswordService from '@modules/users/services/ResetPasswordService';
import { container } from 'tsyringe';

export default class PasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPasswordEmail = container.resolve(ResetPasswordService);

    await resetPasswordEmail.execute({
      token,
      password,
    });

    return response.status(204).json();
  }
}
